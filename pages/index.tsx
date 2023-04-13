import Image from "next/image";

function Home() {
  let slideIndex = 1;
  showSlides(slideIndex);

  function plusSlides(n: number) {
    showSlides((slideIndex += n));
  }

  function currentSlide(n: number) {
    showSlides((slideIndex = n));
  }

  function showSlides(n: number) {
    const slides = document.querySelectorAll(".carousel-item");
    const dots = document.querySelectorAll(".dot");

    if (n > slides.length) {
      slideIndex = 1;
    }
    if (n < 1) {
      slideIndex = slides.length;
    }
    for (let i = 0; i < slides.length; i++) {
      slides[i].classList.add("hidden");
      slides[i].classList.remove("active:block");
    }
    for (let i = 0; i < dots.length; i++) {
      dots[i].classList.remove("active");
    }
    slides[slideIndex - 1].classList.remove("hidden");
    slides[slideIndex - 1].classList.add("active:block");
    dots[slideIndex - 1].classList.add("active");
  }

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
          <div className="relative">
            <div className="relative w-full overflow-hidden">
              <div className="active:block relative float-left hidden carousel-item">
                <Image
                  src={`/fresh.webp`}
                  width={690}
                  height={270}
                  alt="Fresh Finds"
                  className="rounded"
                />
              </div>
              <div className="active:block relative float-left hidden carousel-item">
                <Image
                  src={`/mom.webp`}
                  width={690}
                  height={270}
                  alt="Fresh Finds"
                  className="rounded"
                />
              </div>
              <div className="active:block relative float-left hidden carousel-item">
                <Image
                  src={`/toy.webp`}
                  width={690}
                  height={270}
                  alt="Fresh Finds"
                  className="rounded"
                />
              </div>
              <div className="active:block relative float-left hidden carousel-item">
                <Image
                  src={`/note12.webp`}
                  width={690}
                  height={270}
                  alt="Fresh Finds"
                  className="rounded"
                />
              </div>
            </div>
            <a
              href="#carouselExampleIndicators"
              role="button"
              className="carousel-control-prev"
            >
              <span
                className="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
              <span className="sr-only">Previous</span>
            </a>
            <a
              className="carousel-control-next"
              href="#carouselExampleIndicators"
              role="button"
              data-slide="next"
            >
              <span
                className="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span className="sr-only">Next</span>
            </a>
          </div>
          <div className="carousel relative overflow-hidden">
            <div className="carousel-inner">
              <div className="carousel-item absolute w-full">
                <Image
                  src={`/fresh.webp`}
                  width={690}
                  height={270}
                  alt="Fresh Finds"
                  className="rounded"
                />
              </div>
              <div className="carousel-item absolute w-full">
                <Image
                  src={`/mom.webp`}
                  width={690}
                  height={270}
                  alt="Fresh Finds"
                  className="rounded"
                />
              </div>
              <div className="carousel-item absolute w-full">
                <Image
                  src={`/toy.webp`}
                  width={690}
                  height={270}
                  alt="Fresh Finds"
                  className="rounded"
                />
              </div>
              <Image
                src={`/toy.webp`}
                width={690}
                height={270}
                alt="Fresh Finds"
                className="rounded"
              />
            </div>
          </div>
          <button className="carousel-prev absolute top-1/2 left-0 transform -translate-y-1/2 bg-black bg-opacity-50 text-white px-3 py-2 rounded-l-md">
            Previous
          </button>
          <button className="carousel-next absolute top-1/2 right-0 transform -translate-y-1/2 bg-black bg-opacity-50 text-white px-3 py-2 rounded-r-md">
            Next
          </button>
          <div className="carousel-dots absolute bottom-0 left-0 right-0 flex justify-center mb-4">
            <span className="carousel-dot inline-block h-3 w-3 rounded-full bg-gray-400 mx-2"></span>
            <span className="carousel-dot inline-block h-3 w-3 rounded-full bg-gray-400 mx-2"></span>
            <span className="carousel-dot inline-block h-3 w-3 rounded-full bg-gray-400 mx-2"></span>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Home;
