import LeftSideContent from "./LeftSide/LeftSideContent";
import RightSideContent from "./RightSide/RightSideContent";
import dataJSON from "../data.json";
import { PostIdProvider } from "./context/postIdContext";
import "../scss/_app.scss";

const App = () => {
  return (
    <div className="main_wrapper">
      <PostIdProvider>
        <LeftSideContent data={dataJSON} />
        <RightSideContent />
      </PostIdProvider>
    </div>
  );
};

export default App;
