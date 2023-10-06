import { useAuth } from "../../hooks/use-auth";
import { ImageIcon } from "../../icons";

export default function PostForm() {
  const { authUser } = useAuth();
  return (
    <form className=" flex flex-col gap-4">
      <textarea
        className=" block w-full outline-none resize-none"
        rows="5"
        placeholder={`What's on your mind, ${authUser.firstName}`}
      />
      <div className=" bg-gray-200 hover:bg-gray-300 rounded-lg py-12 flex flex-col items-center cursor-pointer gap-2">
        <div className=" bg-gray-400 h-10 w-10 rounded-full flex items-center justify-center">
          <ImageIcon />
        </div>
        <span>Add photo</span>
      </div>
      <button className=" bg-blue-600 hover:bg-blue-700 text-white px-3 py-1.5 w-full rounded-lg font-semibold">
        Post
      </button>
    </form>
  );
}
