import Header from "../../__molecules/Header/Header";
import FindBar from "../../__molecules/FindBar/FindBar";
import { useDarkMode } from "../../../Mode";

function Container() {
  const mode = useDarkMode((state) => state.mode);
  return (
    <>
      <div
        className={`w-full min-h-screen h-full ${
          mode ? "bg-[#202C36]" : "bg-white"
        }`}
      >
        <Header />

        <FindBar />
      </div>
    </>
  );
}

export default Container;
