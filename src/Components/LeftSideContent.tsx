import { usePostIdProvider } from "./context/postIdContext";
import PostName from "./PostName";
import Link from "./Link";

interface PostProp {
  id: number;
  title: string;
  content: string;
  imgs: object[];
}
interface Props {
  data: PostProp[];
}

const LeftSideContent = ({ data }: Props) => {
  const postIdContext = usePostIdProvider();

  const changePostId = (newId: number) => {
    postIdContext?.setCurrentPostId(newId);
  };

  return (
    <div className="left_side_wrapper default_font20px">
      <div className="posts_name">
        {data.map((post: PostProp) => {
          return (
            <PostName key={post.id} name={post.title} changePostId={() => changePostId(post.id)} />
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
