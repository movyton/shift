import React from "react";
import Slider from "./Slider";
import PostDescription from "./PostDescription";

function RightSideContent() {
  return (
    <div className="right_side_wrapper">
      <Slider />
      <PostDescription />
    </div>
  );
}

export default RightSideContent;
