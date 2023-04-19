import PostName from "./PostName";
import Link from "./Link";

interface PostProp {
  id: number;
  title: string;
  content: string;
  imgs: string[];
}
interface Props {
  data: PostProp[];
}

function LeftSideContent({ data }: Props) {
  return (
    <div className="left_side_wrapper default_font20px">
      <div className="posts_name">
        {data.map((post: PostProp) => {
          return <PostName key={post.id} name={post.title} id={post.id} />;
        })}
      </div>
      <div className="link">
        <Link />
      </div>
    </div>
  );
}

export default LeftSideContent;
