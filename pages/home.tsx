import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";

function Home(): JSX.Element {
  return (
    <main>
      <nav className="bg-green-600 flex justify-around text-white h-10 align-middle pt-3">
        <Link href={"/"}>Hello</Link>
        <Link href={"/"}>World</Link>
        <Link href={"/"}>Fuck</Link>
        <Link href={"/"}>JavaScript</Link>
      </nav>

      <FontAwesomeIcon icon={faMagnifyingGlass} style={{ fontSize: "2rem" }} />
    </main>
  );
}

export default Home;
