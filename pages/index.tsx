import Link from "next/link";

function Home(): JSX.Element {
  return (
    <main>
      <section className="block">
        <p className="block text-center header">Welcome To Bazaar</p>
        <form action="" className="block w-fit mx-auto mt-10">
          <label htmlFor="email" className="mx-auto">
            Email
          </label>
          <input
            type="text"
            id="email"
            className="border rounded-[20px] h-[37px] block w-[80vw] px-2"
          />
          <label htmlFor="password" className="mt-3 block">
            Password
          </label>
          <input
            type="text"
            id="password"
            className="border rounded-[20px] h-[37px] block w-[80vw] px-2"
          />
          <span className="text-center block  text-red-500 mt-3">
            Forgot Password
          </span>
          <Link href={"/home"}>
            <button
              type="submit"
              className="px-2 bg-green-600 text-white rounded-[10px] w-20 h-9 mt-5 block mx-auto"
            >
              Signin
            </button>
          </Link>
          \
        </form>
      </section>
      <div className="mt-[60%] block">
        <span className="text-center block text-red-500">
          Don`t have an account?
        </span>
        <Link href="/create-account">
          <button
            type="button"
            className="border px-2 text-black rounded-[15px] ml-[30%] mx-auto h-8 hover:bg-black hover:text-white hover:border-0"
          >
            Create Account
          </button>
        </Link>
      </div>
    </main>
  );
}

export default Home;
