import React, { useContext } from "react";
import { CurrentPostIdProvider } from "./context/postIdContext";

interface PropName {
  name: string;
  id: number;
  changePostId: () => void;
}

function PostName({ name, id, changePostId }: PropName) {
  // const id = useContext(CurrentPostIdProvider);

  return <div className="post_name">{name}</div>;
}

export default PostName;
