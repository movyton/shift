import React, { useState, createContext } from "react";
import LeftSideContent from "./LeftSideContent";
import RightSideContent from "./RightSideContent";
import dataJSON from "../data.json";
import "../scss/_app.scss";
import { CurrentPostIdProvider } from "./context/postIdContext";

const App = () => {
  const [postId, setPostId] = useState(1);

  const changePostId = (newPostId: number) => {
    setPostId(newPostId);
  };
  return (
    <div className="main_wrapper">
      <CurrentPostIdProvider.Provider value={postId}>
        <LeftSideContent
          data={dataJSON}
          // changePostId={changePostId}
        />
        <RightSideContent />
      </CurrentPostIdProvider.Provider>
    </div>
  );
};

export default App;
