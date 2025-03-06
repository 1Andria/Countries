import { Loop } from "../../../Icons/loop";

type InputTypes = {
  DarkMode: boolean;
};
function Input({ DarkMode }: InputTypes) {
  return (
    <>
      <div
        className={`shadow-lg max-w-[480px] w-full h-[56px] ${
          DarkMode ? "bg-[#2B3844]" : "bg-white"
        } pl-[32px] pr-[32px] flex items-center gap-[24px] `}
      >
        <Loop DarkMode={DarkMode} />
        <input
          placeholder="Search for a country…"
          className={` focus:outline-none w-full text-[14px] font-normal ${
            DarkMode ? "text-white" : "text-black"
          }`}
          type="text"
        />
      </div>
    </>
  );
}
export default Input;
