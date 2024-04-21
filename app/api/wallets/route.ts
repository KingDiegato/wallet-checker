import prisma from "@/config/db";
import { type NextRequest, NextResponse } from "next/server";

export async function GET(): Promise<NextResponse> {
  await prisma.$connect();

  const wallets = await prisma.wallets.findMany();

  await prisma.$disconnect();
  return NextResponse.json(wallets);
}
