import PostHeader from "./PostHeader";
import PostContent from './PostContent'
import PostFooter from "./PostFooter";

export default function PostItem({postObj, deletePost}) {
  return (
    <div className=" bg-white px-4 pt-3 border shadow rounded-lg">
        <PostHeader postObj={postObj} deletePost={deletePost}/>
        <PostContent message={postObj.message} image={postObj.image} />
        <PostFooter postObj={postObj}/>
        </div>
  )
}
