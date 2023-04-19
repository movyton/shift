import LeftSideContent from "./LeftSideContent";
import RightSideContent from "./RightSideContent";
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
