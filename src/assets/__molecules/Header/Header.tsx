import ModeBtn from "../../__atoms/ModeBtn/ModeBtn";

type ModeTypes = {
  SwitchMode: () => void;
  DarkMode: boolean;
};

function Header({ SwitchMode, DarkMode }: ModeTypes) {
  return (
    <>
      <div
        className={`w-full h-[80px] shadow-lg ${
          DarkMode ? "bg-[#2B3844]" : "bg-white"
        }`}
      >
        <div
          className={`h-full mr-auto ml-auto max-w-[1440px] w-full flex justify-between items-center pl-[80px] pr-[80px]`}
        >
          <h1
            className={`${
              DarkMode ? "text-white" : "text-black"
            } text-[24px] font-extrabold `}
          >
            Where in the world?
          </h1>
          <ModeBtn SwitchMode={SwitchMode} DarkMode={DarkMode} />
        </div>
      </div>
    </>
  );
}
export default Header;
