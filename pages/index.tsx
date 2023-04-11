import Image from "next/image";

function Home() {
  return (
    <main>
      <section>
        <Image
          src={`/spotlight.png`}
          width={1000}
          height={30}
          alt="banner"
          className="w-[100vw]"
        />
        <aside className="bg-[#fafafa] w-full h-[40px] border-b-[#f2f2f2] border-b">
          <div className="flex justify-center mx-auto">
            <button>Sell on AliExpress</button>
            <button>Help</button>
            <button>Buyer protection</button>
          </div>
        </aside>
      </section>
      <nav className="w-full">
        <input type="text" className="w-[150px] h-[20px] border-black border" />
      </nav>
    </main>
  );
}

export default Home;
