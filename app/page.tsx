"use client";

import { useState } from "react";
import { WalletForm } from "./form";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <section className="max-w-[60ch]">
        <h1 className="text-8xl text-[#9C37AC]">
          <span>FLUSHIES</span>
        </h1>
        <h2 className="text-4xl text-yellow-200 text-center">Wallet Checker</h2>
        <div className="flex flex-col justify-center">
          <WalletForm />
        </div>
      </section>
    </main>
  );
}
