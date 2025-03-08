import { useDarkMode } from "../../../services/Mode";

type CountryType = {
  country: object & CountryInfo;
};

type CountryInfo = {
  flags: {
    png: string;
  };
  name: {
    common: string;
  };
  common: string;
  capital: string[];
  continents: string[];
  population: number;
};

function Countries({ country }: CountryType) {
  const mode = useDarkMode((state) => state.mode);

  return (
    <>
      <div
        className={`w-[264px] h-[336px] mt-[48px]  shadow-lg flex flex-col   ${
          mode ? "bg-[#2B3844]" : "bg-white"
        } cursor-pointer `}
      >
        <div className="w-[264px] h-[160px] rounded-t-[5px]">
          <img
            className="w-full rounded-t-[5px] h-full  "
            src={country.flags.png}
            alt="flag"
          />
        </div>

        <div className="flex flex-col w-full h-auto pt-[24px] pl-[24px]  gap-[16px]">
          <h3
            className={`font-extrabold text-[18px] ${
              mode ? "text-white" : "text-[#111517]"
            }`}
          >
            {country.name.common}
          </h3>
          <div className="flex flex-col gap-[8px]">
            <h4
              className={`font-semibold text-[14px] ${
                mode ? "text-white" : "text-[#111517]"
              }`}
            >
              Population:{" "}
              <span className="font-light">{country.population}</span>
            </h4>
            <h4
              className={`font-semibold text-[14px] ${
                mode ? "text-white" : "text-[#111517]"
              }`}
            >
              Region:{" "}
              <span className="font-light">{country.continents.join("/")}</span>
            </h4>
            <h4
              className={`font-semibold text-[14px] ${
                mode ? "text-white" : "text-[#111517]"
              }`}
            >
              Region: <span className="font-light"> {country.capital}</span>
            </h4>
          </div>
        </div>
      </div>
    </>
  );
}

export default Countries;
