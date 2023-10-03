import { FacebookIcon } from "../icons";
import Dropdown from "./Dropdown";
import Menu from "./Menu";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className=" grid grid-cols-3 px-4 bg-white shadow-lg sticky top-0">
      <div className=" py-2 justify-self-start">
        <Link to="/">
          <FacebookIcon />
        </Link>
      </div>
      <Menu />
      <div className=" justify-self-end self-center">
        <Dropdown/>
      </div>
    </header>
  );
}
