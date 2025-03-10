import { useNavigate } from "react-router";
import { useDarkMode } from "../../../services/Mode";
import { useSearchValue } from "../../../services/Search";

type CountryType = {
  country: Country;
};

export type Country = {
  flags: {
    png: string;
  };
  name: {
    common: string;
    nativeName: object;
  };
  common: string;
  capital: string[];
  continents: string[];
  population: number;
  region: string;
  currencies: object;
  subregion: string;
  languages: object;
  borders: string[];
  cca3: string;
  cca2: string;
};

function Countries({ country }: CountryType) {
  const mode = useDarkMode((state) => state.mode);
  const navigation = useNavigate();
  const emptyValue = useSearchValue((state) => state.emptyValue);
  function navigate(countryName: string) {
    navigation(`information/${countryName}`);
    setTimeout(() => {
      emptyValue();
    }, 100);
  }

  const num = country.population;
  const options = { maximumFractionDigits: 2 };
  const formattedNumber = Intl.NumberFormat("en-US", options).format(num);

  return (
    <>
      <div
        onClick={() => navigate(country.name.common)}
        className={`w-[264px] h-[336px]   shadow-lg flex flex-col   ${
          mode ? "bg-[#2B3844]" : "bg-white"
        } cursor-pointer rounded-[5px] `}
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
              Population: <span className="font-light">{formattedNumber}</span>
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
              Capital: <span className="font-light"> {country.capital}</span>
            </h4>
          </div>
        </div>
      </div>
    </>
  );
}

export default Countries;
