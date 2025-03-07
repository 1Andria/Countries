import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import { useDarkMode } from "../../../Mode";

function Selector() {
  const mode = useDarkMode((state) => state.mode);
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
            // value={age}
            label="Filter by Region"
            //   onChange={handleChange}

            MenuProps={{
              PaperProps: {
                style: {
                  backgroundColor: mode ? "#2B3844" : "#ffffff",
                },
              },
            }}
          >
            <MenuItem value={10}>
              <h1 className={`${mode ? "text-white" : "text-[#2B3844]"}`}>
                Africa
              </h1>
            </MenuItem>
            <MenuItem value={20}>
              <h1 className={`${mode ? "text-white" : "text-[#2B3844]"}`}>
                America
              </h1>
            </MenuItem>
            <MenuItem value={30}>
              <h1 className={`${mode ? "text-white" : "text-[#2B3844]"}`}>
                Asia
              </h1>
            </MenuItem>
            <MenuItem value={30}>
              <h1 className={`${mode ? "text-white" : "text-[#2B3844]"}`}>
                Europe
              </h1>
            </MenuItem>
            <MenuItem value={30}>
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
