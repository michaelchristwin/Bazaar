import React, { useState } from "react";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import Person2OutlinedIcon from "@mui/icons-material/Person2Outlined";
import "bootstrap/dist/css/bootstrap.min.css";
import MenuIcon from "@mui/icons-material/Menu";
import Offcanvas from "react-bootstrap/Offcanvas";
import Inventory2OutlinedIcon from "@mui/icons-material/Inventory2Outlined";
import RateReviewOutlinedIcon from "@mui/icons-material/RateReviewOutlined";
import LocalActivityOutlinedIcon from "@mui/icons-material/LocalActivityOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import ProductSm from "@/components/Productsm";

function Home(): JSX.Element {
  const [open, setOpen] = useState<boolean>(false);
  const handleClose = () => setOpen(false);
  const handleShow = () => setOpen(true);

  return (
    <main className="">
      <div className="pt-3 d-flex justify-content-between">
        <button className="btn menu ms-2" onClick={handleShow}>
          <MenuIcon />
        </button>
        <p className="d-block ms-2 brand">BAZAAR</p>
        <div className="d-flex">
          <p>
            <Person2OutlinedIcon className="me-4 person" />
          </p>
          <p>
            <ShoppingCartOutlinedIcon className="me-3 cart" />
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
      <section className="p-3">
        <ProductSm img="/iphone.jpeg" name="Phones" />
      </section>
      <Offcanvas show={open} onHide={handleClose} id="offcanvas">
        <Offcanvas.Header closeButton>
          <Offcanvas.Title className="title">Bazaar Account</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body className="off-b">
          <ul className="ul">
            <li>
              <Inventory2OutlinedIcon /> Orders
            </li>
            <li>
              <RateReviewOutlinedIcon /> Pending Review
            </li>
            <li>
              <LocalActivityOutlinedIcon /> Vouchers
            </li>
            <li>
              <FavoriteBorderOutlinedIcon />
              Saved Items
            </li>
          </ul>
          <p className="text-center">Categories</p>
        </Offcanvas.Body>
      </Offcanvas>
    </main>
  );
}

export default Home;
