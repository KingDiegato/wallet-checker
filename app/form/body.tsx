import { submitWalletAction } from "../actions/walletActions";
import { SubmitButton } from "./submitButton";
import { useEffect, useState } from "react";

export function WalletForm() {
  const [response, setResponse] = useState();
  const [status, setStatus] = useState();
  const [error, setError] = useState();
  useEffect(() => {
    if (response) {
      console.log(response);
    }
    return () => {};
  }, [response]);

  const handleSubmit = async (event: any) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const response = await submitWalletAction(formData);
    if (!response) setError(response.message);
    setResponse(response.message);
    setStatus(response.status);
    event.target.reset();
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        <h3 className="text-white text-center text-xl">
          Check Wallet Elegibility
        </h3>
        <input
          name="address"
          className="py-2 px-4 rounded-full active:border-none w-full"
          type="text"
          placeholder="aBcDe...wXyZ"
        ></input>
      </label>
      <div className="flex justify-center">
        <SubmitButton />
      </div>
      <h2
        className={`text-white text-center text-2xl ${
          status === 200 ? "text-green-500" : "text-red-500"
        }`}
      >
        {response && response}
        {error && error}
      </h2>
    </form>
  );
}
