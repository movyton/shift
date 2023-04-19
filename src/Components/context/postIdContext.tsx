import React, { createContext, useContext, useState } from "react";

interface PostIdType {
  currentPostId: number;
  setCurrentPostId: React.Dispatch<React.SetStateAction<number>>;
}

interface Child {
  children: React.ReactNode;
}

const PostId = createContext<null | PostIdType>(null);

export const PostIdProvider = ({ children }: Child) => {
  const [currentPostId, setCurrentPostId] = useState(1);

  return <PostId.Provider value={{ currentPostId, setCurrentPostId }}>{children}</PostId.Provider>;
};

export const usePostIdProvider = () => {
  const postIdContext = useContext(PostId);

  return postIdContext;
};
