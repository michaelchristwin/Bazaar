import Image from "next/image";

function Home() {
  return (
    <main className="bg-[#fafafa]">
      <section>
        <aside className="bg-[#fafafa] w-full h-[40px] border-b-[#f2f2f2] border-b">
          <div>
            <ul className="flex w-full justify-center">
              <li className="">Sell on AliExpress</li>
              <li className="ml-3">Help</li>
              <li className="ml-3">Buyer protection</li>
            </ul>
          </div>
        </aside>
      </section>
      <nav className="w-full justify-around flex bg-white py-5">
        <Image
          src={`/ali-lg.png`}
          width={166}
          height={40}
          alt="AliExpress Logo"
        />
        <input
          type="text"
          className="h-[36px] border-[#ff4747] border-[2px] w-[700px]"
        />
      </nav>
      <section className="flex mt-5">
        <div className="block w-[240px]">
          <aside className="flex h-[13px]">
            <Image
              src={`/cat.png`}
              width={15}
              height={13}
              alt="categories"
              className="block"
            />
            <p className=" text-[14px] mt-[-3px] ml-2">Categories</p>
          </aside>
        </div>
      </section>
    </main>
  );
}

export default Home;
