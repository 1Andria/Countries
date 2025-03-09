import { useDarkMode } from "../../../services/Mode";

type NeighbourProps = {
  name: string;
};
const Neighbour = ({ name }: NeighbourProps) => {
  const mode = useDarkMode((state) => state.mode);
  return (
    <div
      className={`w-auto h-auto pt-[7px] pl-[7px] pb-[7px] pr-[7px] flex justify-center items-center shadow-lg ${
        mode ? "bg-[#2B3844]" : "bg-[white]"
      }`}
    >
      <h4
        className={`font-semibold text-[14px] ${
          mode ? "text-white" : "text-[#111517] "
        }`}
      >
        {name}
      </h4>
    </div>
  );
};

export default Neighbour;
