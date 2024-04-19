/*
  Warnings:

  - A unique constraint covering the columns `[address]` on the table `wallets` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "wallets_address_key" ON "wallets"("address");
