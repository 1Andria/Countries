import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import { useDarkMode } from "../../../services/Mode";
import { useSelectorValue } from "../../../services/selectorValue";
import { useState } from "react";

function Selector() {
  const mode = useDarkMode((state) => state.mode);
  const toAfrica = useSelectorValue((state) => state.setAfricaValue);
  const toAmerica = useSelectorValue((state) => state.setAmericaValue);
  const toAsia = useSelectorValue((state) => state.setAsiaValue);
  const toEurope = useSelectorValue((state) => state.setEuropeValue);
  const toOceania = useSelectorValue((state) => state.setOceaniaValue);

  const [selectedRegion, setSelectedRegion] = useState("");

  const handleChange = (event: any) => {
    setSelectedRegion(event.target.value);
    switch (event.target.value) {
      case "Africa":
        toAfrica();
        break;
      case "America":
        toAmerica();
        break;
      case "Asia":
        toAsia();
        break;
      case "Europe":
        toEurope();
        break;
      case "Oceania":
        toOceania();
        break;
      default:
        break;
    }
  };

  return (
    <>
      <div>
        <FormControl
          className={`w-[200px] shadow-lg ${
            mode ? "bg-[#2B3844]" : "bg-white"
          }`}
          sx={{ m: 1, minWidth: 120 }}
        >
          <InputLabel id="demo-simple-select-helper-label">
            <h1 className={`${mode ? "text-white" : "text-[#2B3844]"}`}>
              Filter by Region
            </h1>
          </InputLabel>
          <Select
            labelId="demo-simple-select-helper-label"
            id="demo-simple-select-helper"
            value={selectedRegion}
            label="Filter by Region"
            onChange={handleChange}
            MenuProps={{
              PaperProps: {
                style: {
                  backgroundColor: mode ? "#2B3844" : "#ffffff",
                },
              },
            }}
          >
            <MenuItem value="Africa">
              <h1 className={`${mode ? "text-white" : "text-[#2B3844]"}`}>
                Africa
              </h1>
            </MenuItem>
            <MenuItem value="America">
              <h1 className={`${mode ? "text-white" : "text-[#2B3844]"}`}>
                America
              </h1>
            </MenuItem>
            <MenuItem value="Asia">
              <h1 className={`${mode ? "text-white" : "text-[#2B3844]"}`}>
                Asia
              </h1>
            </MenuItem>
            <MenuItem value="Europe">
              <h1 className={`${mode ? "text-white" : "text-[#2B3844]"}`}>
                Europe
              </h1>
            </MenuItem>
            <MenuItem value="Oceania">
              <h1 className={`${mode ? "text-white" : "text-[#2B3844]"}`}>
                Oceania
              </h1>
            </MenuItem>
          </Select>
        </FormControl>
      </div>
    </>
  );
}

export default Selector;
