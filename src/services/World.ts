import { create } from "zustand";
import { Country } from "../components/__molecules/Countries/Countries";

type WorldType = {
  world: Country[];
  setWorld: (data: Array<Country>) => void;
};

export const useWorldData = create<WorldType>((set) => ({
  world: [],
  setWorld: (data) => set({ world: data }),
}));
