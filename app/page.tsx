"use client";

export default function Home() {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const data = Object.fromEntries(formData.entries());
    console.log(data.address);
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <section>
        <h1 className="text-8xl text-[#9C37AC]">
          <span>FLUSHIES</span>
        </h1>
        <h2 className="text-4xl text-yellow-200 text-center">Wallet Checker</h2>
        <div className="flex flex-col justify-center">
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
              <button className="active:border-none my-2 w-1/2">Submit</button>
            </div>
          </form>
        </div>
      </section>
    </main>
  );
}
