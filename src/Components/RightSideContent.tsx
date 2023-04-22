import Slider from "./Slider";
import PostDescription from "./PostDescription";
import { usePostIdProvider } from "./context/postIdContext";

import dataJSON from "../data.json";

const RightSideContent = () => {
  const postIdContext = usePostIdProvider();
  const currentPost = dataJSON.filter((post) => post.id === postIdContext?.currentPostId);

  const { id, title, content, imgs } = currentPost[0];

  return (
    <div className="right_side_wrapper default_font20px">
      <Slider imgs={imgs} />
      <PostDescription id={id} title={title} content={content} />
    </div>
  );
};

export default RightSideContent;
