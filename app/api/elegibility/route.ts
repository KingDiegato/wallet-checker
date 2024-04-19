import { prisma } from "@/config/db";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  return NextResponse.json({
    message: "You may send me your wallet address",
    status: 400,
  });
}
