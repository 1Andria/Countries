import { Link } from "react-router";
import { Arrow } from "../../../Icons/arrow";
import { useDarkMode } from "../../../services/Mode";

const ToBackBtn = () => {
  const mode = useDarkMode((state) => state.mode);
  return (
    <>
      <Link
        to="/"
        className={`shadow-lg w-[136px] h-[40px] ${
          mode ? "bg-[#2B3844]" : "bg-white"
        } flex  items-center justify-center gap-[8px] rounded-[6px] `}
      >
        <Arrow />
        <h4
          className={`font-semibold text-[16px] ${
            mode ? "text-white" : "text-[#111517]"
          }`}
        >
          Back
        </h4>
      </Link>
    </>
  );
};

export default ToBackBtn;
