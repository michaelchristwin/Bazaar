function Home() {
  return (
    <main>
      <section className="block">
        <p className="block text-center header">Welcome To Bazaar.</p>
        <span className="px-3">Signin</span>
        <form action="" className="block w-fit mx-auto">
          <label htmlFor="email" className="mx-auto">
            Email
          </label>
          <input
            type="text"
            id="email"
            className="border rounded h-[30px] block"
          />
          <label htmlFor="password" className="mt-3 block">
            Password
          </label>
          <input
            type="text"
            id="password"
            className="border rounded h-[30px] block"
          />
        </form>
      </section>
      <div className="mt-7">
        <span className="text-center block">Don`t have an account?</span>
        <button
          type="button"
          className="border bg-blue-600 px-1 text-white rounded-[15px] block mx-auto py-1 hover:bg-black"
        >
          Create Account
        </button>
      </div>
    </main>
  );
}

export default Home;
