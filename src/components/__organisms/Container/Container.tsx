import Header from "../../__molecules/Header/Header";
import FindBar from "../../__molecules/FindBar/FindBar";
import { useDarkMode } from "../../../services/Mode";
import Countries from "../../__molecules/Countries/Countries";
import { useEffect, useState } from "react";
import { FetchData } from "../../../services/api";
import { useSearchValue } from "../../../services/Search";
import { useSelectorValue } from "../../../services/selectorValue";

// type WorldType = {
//   name: {
//     common: string;
//   };
//   continents: string[];
// };

function Container() {
  const mode = useDarkMode((state) => state.mode);
  const [world, setWorld] = useState([]);
  useEffect(() => {
    FetchData(setWorld);
  }, []);
  const inputValue = useSearchValue((state) => state.value);
  const SelectorValue = useSelectorValue((state) => state.selValue);
  const filteredData = world.filter((country) =>
    country.name.common.toLowerCase().includes(inputValue.toLocaleLowerCase())
  );

  const RegionFilter =
    SelectorValue !== ""
      ? world.filter((country) =>
          country.continents.some((continent) =>
            continent.includes(SelectorValue)
          )
        )
      : world;

  return (
    <>
      <div
        className={`w-full min-h-screen h-full ${
          mode ? "bg-[#202C36]" : "bg-[#fafafa]"
        }`}
      >
        <Header />
        <FindBar />
        <div className="max-w-[1440px] mr-auto ml-auto w-full gap-[35px] h-auto flex flex-wrap justify-between pr-[80px] pl-[80px] pb-[40px]">
          {inputValue.length === 0 &&
            !SelectorValue &&
            world.map((country, key) => {
              return <Countries key={key} country={country} />;
            })}
          {inputValue.length > 0 &&
            filteredData.map((country, key) => {
              return <Countries key={key} country={country} />;
            })}
          {inputValue.length === 0 &&
            SelectorValue &&
            RegionFilter.map((country, key) => {
              return <Countries key={key} country={country} />;
            })}
        </div>
      </div>
    </>
  );
}

export default Container;
