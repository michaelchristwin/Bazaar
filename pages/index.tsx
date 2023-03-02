import React, { useState } from "react";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import Person2OutlinedIcon from "@mui/icons-material/Person2Outlined";
import "bootstrap/dist/css/bootstrap.min.css";
import MenuIcon from "@mui/icons-material/Menu";
import Offcanvas from "react-bootstrap/Offcanvas";

function Home(): JSX.Element {
  const [open, setOpen] = useState<boolean>(false);
  const handleClose = () => setOpen(false);
  const handleShow = () => setOpen(true);

  return (
    <main className="">
      <div className="pt-3 d-flex justify-content-between">
        <button className="btn menu border ms-2" onClick={handleShow}>
          <MenuIcon />
        </button>
        <p className="d-block ms-2 brand">BAZAAR</p>
        <div className="d-flex">
          <p>
            <Person2OutlinedIcon className="me-4 person" />
          </p>
          <p>
            <ShoppingCartOutlinedIcon className="mr-3 cart" />
          </p>
        </div>
      </div>
      <fieldset className="position-relative d-block">
        <input
          type="text"
          name=""
          className="form-control form mx-auto text-center"
          id="Search"
          placeholder={`Search`}
        />
        <SearchOutlinedIcon className="search-icon" />
      </fieldset>
      <Offcanvas show={open} onHide={handleClose} id="offcanvas">
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Offcanvas</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          Some text as placeholder. In real life you can have the elements you
          have chosen. Like, text, images, lists, etc.
        </Offcanvas.Body>
      </Offcanvas>
    </main>
  );
}

export default Home;
