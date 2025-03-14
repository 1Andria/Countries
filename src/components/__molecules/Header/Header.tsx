import { useNavigate } from "react-router";
import { useDarkMode } from "../../../services/Mode";
import ModeBtn from "../../__atoms/ModeBtn/ModeBtn";

function Header() {
  const mode = useDarkMode((state) => state.mode);
  const navigation = useNavigate();

  function ToMain() {
    navigation(`/`);
    window.location.reload();
  }

  return (
    <>
      <div
        className={`w-full h-[80px] shadow-lg ${
          mode ? "bg-[#2B3844]" : "bg-white"
        }`}
      >
        <div
          className={`h-full mr-auto ml-auto max-w-[1440px] w-full flex justify-between items-center pl-[80px] pr-[80px] max-xl:pr-[50px] max-xl:pl-[50px] max-mm:pr-[16px] max-mm:pl-[16px]`}
        >
          <h1
            onClick={ToMain}
            className={`${
              mode ? "text-white" : "text-black"
            } text-[24px] font-extrabold cursor-pointer max-mm:text-[14px] `}
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
