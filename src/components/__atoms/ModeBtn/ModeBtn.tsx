import { Moon } from "../../../Icons/moon";
import { useDarkMode } from "../../../services/Mode";

function ModeBtn() {
  const mode = useDarkMode((state) => state.mode);
  const change = useDarkMode((state) => state.change);

  return (
    <>
      <button
        onClick={change}
        className="flex cursor-pointer items-center gap-[8px] "
      >
        <Moon DarkMode={mode} />

        <h3
          className={`text-[16px] font-semibold ${
            mode ? "text-white" : "text-black"
          } flex items-center gap-[5px]`}
        >
          Dark Mode
        </h3>
      </button>
    </>
  );
}

export default ModeBtn;
