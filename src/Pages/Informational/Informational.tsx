import { useParams } from "react-router";
import { useWorldData } from "../../services/World";
import { useEffect } from "react";
import { FetchData } from "../../services/api";
import Header from "../../components/__molecules/Header/Header";
import ToBackBtn from "../../components/__atoms/ToBackBtn/ToBackBtn";
import { useDarkMode } from "../../services/Mode";
import Neighbour from "../../components/__atoms/Neighbour/Neighbour";

function Informational() {
  const { name } = useParams();

  const WorldInfo = useWorldData((state) => state.world);
  useEffect(() => {
    FetchData();
  }, []);

  const mode = useDarkMode((state) => state.mode);

  useEffect(() => {
    const darked = localStorage.getItem("darked");
    if (darked === "true") {
      useDarkMode.setState({ mode: true });
    }
  }, []);

  const WorldData = WorldInfo.find((country) => country.name.common === name);
  console.log("gela", WorldData?.population);

  const numb = Number(WorldData?.population);
  const options = { maximumFractionDigits: 2 };
  const formattedNumber = Intl.NumberFormat("en-US", options).format(numb);

  return (
    <>
      <div
        className={`w-full min-h-screen pb-[30px] ${
          mode ? "bg-[#202c36]" : "bg-[#fafafa]"
        }`}
      >
        <Header />
        <div
          className={`max-w-[1440px] w-full mr-auto ml-auto mt-[80px] pr-[80px] pl-[80px] max-xl:pr-[50px] max-xl:pl-[50px] max-mm:pr-[16px] max-mm:pl-[16px]`}
        >
          <ToBackBtn />
          <div className="flex w-full max-xl:flex-col gap-[30px] h-auto justify-between mt-[80px]">
            <div className="max-w-[560px] max-h-[401px] w-full rounded-[10px]">
              <img
                src={WorldData?.flags.png}
                className="w-full h-full rounded-[10px]"
                alt="flag"
              />
            </div>
            <div className="max-w-[574px] w-full flex flex-col">
              <h1
                className={`font-extrabold text-[32px] ${
                  mode ? "text-white" : "text-[#111517]"
                }`}
              >
                {WorldData?.name.common}
              </h1>
              <div className="w-full max-ss:flex-col max-ss:gap-[50px] flex justify-between mt-[23px]">
                <div className="flex flex-col gap-[8px]">
                  <h4
                    className={`font-semibold text-[16px] ${
                      mode ? "text-white" : "text-[#111517]"
                    }`}
                  >
                    Native Name:{" "}
                    <span className="font-light">
                      {WorldData?.name.nativeName &&
                        Object.values(WorldData.name.nativeName)[0].common}
                    </span>
                  </h4>
                  <h4
                    className={`font-semibold text-[16px] ${
                      mode ? "text-white" : "text-[#111517]"
                    }`}
                  >
                    Population:{" "}
                    <span className="font-light">{formattedNumber}</span>
                  </h4>
                  <h4
                    className={`font-semibold text-[16px] ${
                      mode ? "text-white" : "text-[#111517]"
                    }`}
                  >
                    Region:{" "}
                    <span className="font-light">{WorldData?.region}</span>
                  </h4>
                  <h4
                    className={`font-semibold text-[16px] ${
                      mode ? "text-white" : "text-[#111517]"
                    }`}
                  >
                    Sub Region:{" "}
                    <span className="font-light">{WorldData?.subregion}</span>
                  </h4>
                  <h4
                    className={`font-semibold text-[16px] ${
                      mode ? "text-white" : "text-[#111517]"
                    }`}
                  >
                    Capital:{" "}
                    {WorldData?.capital && (
                      <span className="font-light">{WorldData?.capital}</span>
                    )}
                    {!WorldData?.capital && (
                      <span className="font-light">Does not have capital</span>
                    )}
                  </h4>
                </div>
                <div className="flex flex-col gap-[8px]">
                  <h4
                    className={`font-semibold text-[16px] ${
                      mode ? "text-white" : "text-[#111517]"
                    }`}
                  >
                    Top Level Domain:{" "}
                    <span className="font-light">
                      .{WorldData?.cca2.toLocaleLowerCase()}
                    </span>
                  </h4>
                  <h4
                    className={`font-semibold text-[16px] ${
                      mode ? "text-white" : "text-[#111517]"
                    }`}
                  >
                    Currencies:{" "}
                    <span className="font-light">
                      {WorldData?.currencies &&
                        Object.values(WorldData.currencies)[0].name}
                    </span>
                  </h4>
                  <h4
                    className={`font-semibold text-[16px] ${
                      mode ? "text-white" : "text-[#111517]"
                    }`}
                  >
                    Languages:{" "}
                    <span className="font-light">
                      {" "}
                      {WorldData?.languages &&
                        Object.values(WorldData.languages).join("/")}
                    </span>
                  </h4>
                </div>
              </div>
              <div className="flex gap-[16px] mt-[70px] items-center">
                <h4
                  className={`max-w-[130px] w-full font-semibold text-[16px] ${
                    mode ? "text-white" : "text-[#111517] "
                  }`}
                >
                  Border Countries:
                </h4>
                {!WorldData?.borders && (
                  <h4
                    className={`max-w-[130px] w-full font-semibold text-[14px] ${
                      mode ? "text-white" : "text-[#111517] "
                    }`}
                  >
                    Does not have one.
                  </h4>
                )}
                <div className="w-full flex flex-wrap gap-[10px] ">
                  {WorldData?.borders &&
                    WorldData?.borders.length > 0 &&
                    WorldData?.borders.map((border) => {
                      const borderCountry = WorldInfo.find(
                        (country) => country.cca3 === border
                      );
                      return (
                        <Neighbour
                          key={border}
                          name={
                            borderCountry ? borderCountry.name.common : border
                          }
                        />
                      );
                    })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Informational;
