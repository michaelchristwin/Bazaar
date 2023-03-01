import React, { useState } from "react";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import Person2OutlinedIcon from "@mui/icons-material/Person2Outlined";
import Image from "next/image";
import "bootstrap/dist/css/bootstrap.min.css";

function Home() {
  const [open, setOpen] = useState<boolean>(false);
  return (
    <main className="">
      <div className="pt-5 d-flex justify-content-between">
        <p className="d-block ms-2">BAZAAR</p>
        <div className="d-flex">
          <p>
            <Person2OutlinedIcon className="me-4" />
          </p>
          <p>
            <ShoppingCartOutlinedIcon className="mr-3" />
          </p>
        </div>
      </div>
      <fieldset className="position-relative mt-3 d-flex">
        <input
          type="text"
          name=""
          className="form-control form ms-2 text-center"
          id="Search"
          placeholder={`Search`}
        />
        <SearchOutlinedIcon className="search-icon" />
        <button className="btn btn-primary ms-1">Search</button>
      </fieldset>
      <button className="btn btn-primary p-2">
        <Image src={"/menu.png"} width={25} height={20} alt="wi" />
      </button>
    </main>
  );
}

export default Home;
