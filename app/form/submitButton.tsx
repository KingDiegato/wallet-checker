"use client";

import { useFormStatus } from "react-dom";

export function SubmitButton() {
  const { pending } = useFormStatus();

  return (
    <button
      className="active:border-none my-2 w-1/2"
      disabled={pending}
      type="submit"
    >
      {pending ? "Checking..." : "Check my Wallet"}
    </button>
  );
}
