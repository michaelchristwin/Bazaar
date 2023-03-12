function CreateAccount() {
  return (
    <main>
      <section>
        <p className="block mx-auto w-fit font-[600] text-[21px] text-green-600 mt-3">
          Create New Account
        </p>
        <form action="" className="w-fit mx-auto mt-7">
          <label htmlFor="email" className="block">
            Email
          </label>
          <input
            type="email"
            id="email"
            className="border rounded-[20px] h-[37px] block w-[80vw] px-2"
            placeholder="Enter Your Email Here"
          />
          <label htmlFor="dob" className="mt-5 block">
            Date of Birth
          </label>
          <input
            type="date"
            id="dob"
            className="border rounded-[20px] h-[37px] block w-[80vw] px-2"
          />
          <label htmlFor="pwd" className="mt-4 block">
            Password
          </label>
          <input
            type="password"
            name=""
            id="pwd"
            className="border rounded-[20px] h-[37px] block w-[80vw] px-2"
          />
          <label htmlFor="confpwd" className="mt-4 block">
            Confirm Password
          </label>
          <input
            type="password"
            name=""
            id="confpwd"
            className="border rounded-[20px] h-[37px] block w-[80vw] px-2"
          />
        </form>
      </section>
    </main>
  );
}

export default CreateAccount;
