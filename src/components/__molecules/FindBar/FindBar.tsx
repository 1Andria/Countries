import Input from "../../__atoms/Input/Input";
import Selector from "../../__atoms/Selector/Selector";

function FindBar() {
  return (
    <>
      <div className="pr-[80px] pl-[80px] mt-[48px] flex max-w-[1440px] w-full justify-between ml-auto mr-auto">
        <Input />
        <Selector />
      </div>
    </>
  );
}
export default FindBar;
