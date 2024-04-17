import { PrismaClient } from "@prisma/client";

export const prisma = new PrismaClient();

function walletGenerator() {
  const chars =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  let address = "";

  for (let i = 0; i < 44; i++) {
    address += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return address;
}

// Generar 50 wallets
const walletsSolana = Array(50)
  .fill()
  .map(() => ({
    address: walletGenerator(),
  }));

prisma.wallets
  .createMany({
    data: walletsSolana,
  })
  .then(() => console.log("Seeded"))
  .catch((e) => console.log("Error seeding: ", e));
