"use server";

export const submitWalletAction = async (wallet: FormData) => {
  const address = wallet.get("address");
  console.log(address);

  const response = await fetch(
    `${process.env.BASE_URL}/api/elegibility/` + address,
    {
      method: "GET",
    }
  );
  const data = await response.json();
  return data;
};
