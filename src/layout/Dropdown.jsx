import Avatar from "../components/Avatar";
import { Link } from "react-router-dom";
import { RightFromBracketIcon } from "../icons";

export default function Dropdown() {
  return (
    <div className=" relative">
      <div className=" cursor-pointer">
        <Avatar />
      </div>
      <div className=" w-96 absolute bg-white right-0 translate-y-1 border rounded-xl shadow-xl p-2">
        <Link to="/profile/aaa">
          <div className=" flex gap-4 p-2 items-center rounded-xl hover:bg-gray-100">
            <Avatar className=" h-14" />
            <div>
              <div className=" font-semibold"> John Cena</div>
              <div className=" text-sm text-gray-500">See your profile</div>
            </div>
          </div>
        </Link>
        <hr className=" m-2 border" />
        <div className=" flex gap-4 p-2 items-center cursor-pointer hover:bg-gray-100 rounded-xl">
          <div className=" bg-gray-300 h-9 aspect-square rounded-full flex justify-center items-center">
            <RightFromBracketIcon />
          </div>
          <div className=" font-semibold text-sm">Log out</div>
        </div>
      </div>
    </div>
  );
}
