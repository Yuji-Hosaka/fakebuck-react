import PostHeader from "./PostHeader";
import PostContent from './PostContent'
import PostFooter from "./PostFooter";

export default function PostItem({postObj}) {
  return (
    <div className=" bg-white px-4 pt-3 border shadow rounded-lg">
        <PostHeader postObj={postObj}/>
        <PostContent message={postObj.message} image={postObj.image} />
        <PostFooter postObj={postObj}/>
        </div>
  )
}
