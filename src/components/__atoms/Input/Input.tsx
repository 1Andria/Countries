import { Loop } from "../../../Icons/loop";
import { useDarkMode } from "../../../services/Mode";
import { useSearchValue } from "../../../services/Search";

function Input() {
  const mode = useDarkMode((state) => state.mode);
  const inputValue = useSearchValue((state) => state.setValue);

  return (
    <>
      <div
        className={`shadow-lg max-w-[480px] w-full h-[56px] ${
          mode ? "bg-[#2B3844]" : "bg-white"
        } pl-[32px] pr-[32px] flex items-center gap-[24px] `}
      >
        <Loop DarkMode={mode} />
        <input
          onChange={(e) => inputValue(e.currentTarget.value)}
          placeholder="Search for a country…"
          className={` focus:outline-none w-full text-[14px] font-normal ${
            mode ? "text-white" : "text-black"
          }`}
          type="text"
        />
      </div>
    </>
  );
}
export default Input;
