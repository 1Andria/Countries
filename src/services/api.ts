import axios from "axios";
import { useWorldData } from "./World";
import { Country } from "../components/__molecules/Countries/Countries";

export async function FetchData() {
  try {
    const response = await axios.get<Country[]>(
      "https://restcountries.com/v3.1/all"
    );
    useWorldData.getState().setWorld(response.data);
  } catch (error) {
    console.error("Error fetching countries:", error);
  }
}
