import { Moon } from "../../../Icons/moon";

type BtnTypes = {
  SwitchMode: () => void;
  DarkMode: boolean;
};

function ModeBtn({ SwitchMode, DarkMode }: BtnTypes) {
  return (
    <>
      <button onClick={SwitchMode} className="flex cursor-pointer">
        <h3
          className={`text-[16px] font-semibold ${
            DarkMode ? "text-white" : "text-black"
          } flex items-center gap-[5px]`}
        >
          <Moon DarkMode={DarkMode} />
          Dark Mode
        </h3>
      </button>
    </>
  );
}

export default ModeBtn;
