import React from "react";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";

function Home() {
  return (
    <main className="w-full">
      <div className="pt-5 flex justify-between">
        <p className="block ml-2 text-blue-700 text-[1.23rem] font-['Helvetica'] font-[700]">
          BAZAAR
        </p>
        <div>
          <ShoppingCartOutlinedIcon className="mr-3" />
        </div>
      </div>
      <div className="relative block w-full mt-3">
        <input
          type="text"
          name=""
          className="rounded-[0.7rem] lg:ml-1 block text-black h-10 pl-8 border w-[90%] mx-auto"
          id="Search"
          placeholder={`Search`}
        />
        <SearchOutlinedIcon className="absolute top-2 left-6 lg:left-2" />
      </div>
    </main>
  );
}

export default Home;
