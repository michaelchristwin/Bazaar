import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import {
  faUser,
  faHouse,
  faCartShopping,
  faComment,
} from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";

function Home(): JSX.Element {
  return (
    <main className=" relative">
      <nav className="bg-green-600 flex justify-around text-white h-10 align-middle pt-3 fixed w-full bottom-0">
        <Link href={"/"}>
          <FontAwesomeIcon icon={faBars} style={{ fontSize: "1rem" }} />
        </Link>
        <Link href={"/"}>
          <FontAwesomeIcon icon={faHouse} style={{ fontSize: "1.3rem" }} />
        </Link>
        <Link href={"/"}>
          <FontAwesomeIcon
            icon={faCartShopping}
            style={{ fontSize: "1.3rem" }}
          />
        </Link>
        <Link href={"/"}>
          <FontAwesomeIcon icon={faUser} style={{ fontSize: "1.3rem" }} />
        </Link>
        <Link href={"/"}>
          <FontAwesomeIcon icon={faComment} style={{ fontSize: "1.3rem" }} />
        </Link>
      </nav>
      <div className="relative">
        <input
          type="text"
          id=""
          placeholder="Search"
          className="pl-7 rounded-[20px] h-[37px] block w-[80vw] mt-2 border border-black ml-3"
        />
        <FontAwesomeIcon
          icon={faMagnifyingGlass}
          style={{ fontSize: "1rem" }}
          className="absolute top-[9px] left-5"
        />
      </div>
    </main>
  );
}

export default Home;
