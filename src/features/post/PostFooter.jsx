import { MessageIcon, ThumbsUpAltIcon, ThumbsUpIcon } from "../../icons";
import ActionButton from "./ActionButton";

export default function PostFooter() {
  return (
    <div>
      <div className=" flex justify-between items-center pb-2">
        <div className=" flex gap-1 items-center">
          <div className=" bg-blue-500 h-4 w-4 rounded-full flex items-center justify-center">
            <ThumbsUpIcon />
          </div>
          <span className=" text-sm text-gray-500">3</span>
        </div>
        <span className=" text-gray-500 hover:underline cursor-pointer">
          8 comments
        </span>
      </div>
      <hr />
      <div className=" flex gap-1 py-1">
        
        <ActionButton>
          <div className=" flex justify-center gap-2">
            <ThumbsUpAltIcon className=" fill-gray-500" />
            <span>Like</span>
          </div>
        </ActionButton>

        <ActionButton>
          <div className=" flex justify-center items-center gap-2">
            <MessageIcon className=" fill-gray-500" />
            <span>Comment</span>
          </div>
        </ActionButton>
      </div>
    </div>
  );
}
