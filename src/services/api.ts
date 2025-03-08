import axios from "axios";

export async function FetchData(
  setWorld: React.Dispatch<React.SetStateAction<never[]>>
) {
  try {
    const countries = await axios.get("https://restcountries.com/v3.1/all");
    setWorld(countries.data);
  } catch (error) {}
}
