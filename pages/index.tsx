import React from "react";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import Person2OutlinedIcon from "@mui/icons-material/Person2Outlined";

function Home() {
  return (
    <main className="w-full">
      <div className="pt-5 flex justify-between">
        <p className="block ml-2 text-blue-700 text-[1.23rem] font-['Helvetica'] font-[700]">
          BAZAAR
        </p>
        <div className="flex">
          <p>
            <Person2OutlinedIcon className="mr-4" />
          </p>
          <p>
            <ShoppingCartOutlinedIcon className="mr-3" />
          </p>
        </div>
      </div>
      <fieldset className="relative w-full mt-3 flex">
        <input
          type="text"
          name=""
          className="rounded-[0.7rem] lg:ml-1 block text-black h-10 pl-8 border-2 w-[75%] ml-2"
          id="Search"
          placeholder={`Search`}
        />
        <SearchOutlinedIcon className="absolute top-2 left-4 lg:left-2" />
        <button className=" bg-blue-700 text-white px-3 rounded ml-2 hover:bg-blue-600">
          Search
        </button>
      </fieldset>
    </main>
  );
}

export default Home;
