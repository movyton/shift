import { usePostIdProvider } from "./context/postIdContext";

interface PropName {
  name: string;
  id: number;
}

function PostName({ name, id }: PropName) {
  const postIdContext = usePostIdProvider();

  return (
    <div className="post_name" onClick={() => postIdContext?.setCurrentPostId(id)}>
      {name}
    </div>
  );
}

export default PostName;
