import { useDarkMode } from "../../../Mode";
import ModeBtn from "../../__atoms/ModeBtn/ModeBtn";

function Header() {
  const mode = useDarkMode((state) => state.mode);
  return (
    <>
      <div
        className={`w-full h-[80px] shadow-lg ${
          mode ? "bg-[#2B3844]" : "bg-white"
        }`}
      >
        <div
          className={`h-full mr-auto ml-auto max-w-[1440px] w-full flex justify-between items-center pl-[80px] pr-[80px]`}
        >
          <h1
            className={`${
              mode ? "text-white" : "text-black"
            } text-[24px] font-extrabold `}
          >
            Where in the world?
          </h1>
          <ModeBtn />
        </div>
      </div>
    </>
  );
}
export default Header;
