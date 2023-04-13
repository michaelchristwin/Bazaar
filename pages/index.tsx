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
        <div className="block w-[240px] bg-white h-[516px] rounded mx-[40px] p-3">
          <aside className="flex h-[13px]">
            <Image
              src={`/cat.png`}
              width={15}
              height={13}
              alt="categories"
              className="block"
            />
            <ul className="cate">
              <p className=" text-[14px] mt-[-3px] ml-2 font-bold">
                Categories
              </p>
              <li>Women`s Fashion</li>
              <li>Mens`s Fashion</li>
              <li>Phones & Telecommunications</li>
              <li>Computer Office & Security</li>
              <li>Consumer Electronics</li>
              <li>Jewelry and Watches</li>
              <li>Home, Pet and Appliances </li>
              <li>Bags and Shoes</li>
              <li>Toys kids and Babies</li>
              <li>Outdoor fun and Sports</li>
              <li>Beauty, Health and Hair</li>
              <li>Automobiles and Motorcycles</li>
              <li>Tools and Home improvement</li>
            </ul>
          </aside>
        </div>
        <div>
          <div>
            <Image
              src={`/mom.webp`}
              width={690}
              height={270}
              alt="Mom Deals"
              className="rounded"
            />
          </div>
          <div className="mt-3">
            <Image
              src={`/bg.png`}
              width={690}
              height={200}
              alt="Background"
              className="rounded w-[690px] h-[200px]"
            />
          </div>
        </div>
      </section>
    </main>
  );
}

export default Home;
