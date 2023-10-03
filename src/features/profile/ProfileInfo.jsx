import Avatar from "../../components/Avatar";
import { PenIcon } from "../../icons";

export default function ProfileInfo() {
  return (
    <div className=" max-w-6xl mx-auto flex gap-4 px-4 items-end">
      <div className=" mt-8">
        <Avatar className=" h-40  outline outline-[3px] outline-white" />
      </div>
      <div className=" flex-1 mb-2">
        <h2 className=" text-2xl font-bold">John Doe</h2>
        <span className=" block text-gray-500 font-semibold mb-2">
          6 friends
        </span>
        <div className=" flex -space-x-2">
          <Avatar className=" h-8" />
          <Avatar className=" h-8" />
          <Avatar className=" h-8" />
          <Avatar className=" h-8" />
        </div>
      </div>
      <div>
        <button className=" bg-gray-300 px-3 py-2 rounded-lg font-semibold hover:bg-gray-300 flex gap-2 items-center">
          <PenIcon />
          <span>xEdit Profile</span>
        </button>
      </div>
    </div>
  );
}
