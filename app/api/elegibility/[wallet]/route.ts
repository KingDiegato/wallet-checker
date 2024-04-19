import { prisma } from "@/config/db";
import { NextRequest, NextResponse } from "next/server";

export async function GET(
  request: NextRequest,
  response: { params: { wallet: string } }
) {
  if (response.params.wallet.length !== 44) {
    return NextResponse.json({
      message: "Invalid wallet address",
      status: 400,
    });
  }
  if (!response.params.wallet.match(/^[a-zA-Z0-9]+$/)) {
    return NextResponse.json({
      message: "Invalid wallet address",
      status: 400,
    });
  }
  await prisma.$connect();
  const wallet = response.params.wallet;
  try {
    const matchedWallet = await prisma.wallets.findMany({
      where: {
        address: wallet,
      },
    });
    const uniqueWallet = matchedWallet[0];
    const walletId = uniqueWallet?.id;
    const foundWallet = await prisma.wallets.findUnique({
      where: {
        id: walletId,
      },
    });
    return NextResponse.json({
      data: foundWallet,
      status: 200,
      message: "Yay, you are in the allowlist!",
    });
  } catch (error) {
    return NextResponse.json({
      message: "Sorry, you are not in the allowlist!",
      status: 400,
    });
  } finally {
    await prisma.$disconnect();
  }
}
