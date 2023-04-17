import React from "react";
import PostName from "./PostName";
import Link from "./Link";

interface PostProp {
  id: number;
  name: string;
  content: string;
  imgs: string[];
}
interface Props {
  data: PostProp[];
}

function LeftSideContent({ data }: Props, changePostId: () => void) {
  return (
    <div className="left_side_wrapper default_font20px">
      <div className="posts_name">
        {data.map((post: PostProp) => (
          <PostName key={post.id} name={post.name} id={post.id} changePostId={changePostId} />
        ))}
      </div>
      <div className="link">
        <Link />
      </div>
    </div>
  );
}

export default LeftSideContent;
