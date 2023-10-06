import PostHeader from "./PostHeader";
import PostContent from './PostContent'
import PostFooter from "./PostFooter";

export default function PostItem() {
  return (
    <div className=" bg-white px-4 pt-3 border shadow rounded-lg">
        <PostHeader/>
        <PostContent />
        <PostFooter />
        </div>
  )
}
