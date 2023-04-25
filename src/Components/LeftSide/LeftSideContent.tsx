import { usePostIdProvider } from "../context/postIdContext";
import PostName from "./PostName";
import Link from "./Link";
import "../../scss/left_side.css";

interface PostProp {
  id: number;
  title: string;
  content: string[][];
  imgs: object[];
  active: boolean;
}
interface Props {
  data: PostProp[];
}

const LeftSideContent = ({ data }: Props) => {
  const postIdContext = usePostIdProvider();

  const changePostId = (newId: number) => {
    postIdContext?.setCurrentPostId(newId);
  };

  const isActive = (id: number) => {
    data.forEach((post) => {
      if (post.id === id) {
        post.active = true;
      } else {
        post.active = false;
      }
    });
  };

  return (
    <div className="left_side_wrapper default_font20px">
      <div className="posts_name">
        {data.map((post: PostProp) => {
          return (
            <PostName
              key={post.id}
              name={post.title}
              active={post.active}
              changePostId={() => changePostId(post.id)}
              changeActive={() => isActive(post.id)}
            />
          );
        })}
      </div>
      <div className="link">
        <Link />
      </div>
    </div>
  );
};

export default LeftSideContent;
