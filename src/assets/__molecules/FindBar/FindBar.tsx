import Input from "../../__atoms/Input/Input";
import Selector from "../../__atoms/Selector/Selector";
type SearchTypes = {
  DarkMode: boolean;
};
function FindBar({ DarkMode }: SearchTypes) {
  return (
    <>
      <div className=" mt-[48px] flex max-w-[1440px] w-full justify-between ml-auto mr-auto">
        <Input DarkMode={DarkMode} />
        <Selector DarkMode={DarkMode} />
      </div>
    </>
  );
}
export default FindBar;
