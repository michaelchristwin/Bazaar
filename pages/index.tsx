import React from "react";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";

function Home() {
  return (
    <main className="w-full">
      <div className="pt-5">
        <p className="block ml-2 text-blue-700 text-[1.23rem] font-['Helvetica'] font-[700]">
          BAZAAR
        </p>
      </div>
      <div className="relative">
        <input
          type="text"
          name=""
          className="rounded-[0.7rem] ml-1 block text-black h-10 pl-8 border"
          id="Search"
          placeholder={`Search`}
        />
        <SearchOutlinedIcon className="absolute top-2 left-2" />
      </div>
    </main>
  );
}

export default Home;
