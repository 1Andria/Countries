import Input from "../../__atoms/Input/Input";
import Selector from "../../__atoms/Selector/Selector";

function FindBar() {
  return (
    <>
      <div className="pr-[80px] pl-[80px] mt-[48px] flex max-w-[1440px] w-full justify-between ml-auto mr-auto max-xl:pr-[50px] max-xl:pl-[50px] items-center max-mm:flex-col max-mm:items-start max-mm:gap-[50px] max-mm:pr-[16px] max-mm:pl-[16px]">
        <Input />
        <Selector />
      </div>
    </>
  );
}
export default FindBar;
