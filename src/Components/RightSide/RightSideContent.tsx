import Slider from "./Post/Slider";
import PostDescription from "./Post/PostDescription";
import { usePostIdProvider } from "../context/postIdContext";
import dataJSON from "../../data.json";
import "../../scss/right_side.css";

const RightSideContent = () => {
  const postIdContext = usePostIdProvider();
  const currentPost = dataJSON.filter((post) => post.id === postIdContext?.currentPostId);

  const { title, content, imgs } = currentPost[0];

  return (
    <div className="right_side_wrapper default_font20px">
      <Slider imgs={imgs} />
      <PostDescription title={title} content={content} />
    </div>
  );
};

export default RightSideContent;
