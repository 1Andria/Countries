import { create } from "zustand";

type SelectorType = {
  selValue: string;
  setAfricaValue: () => void;
  setAmericaValue: () => void;
  setAsiaValue: () => void;
  setEuropeValue: () => void;
  setOceaniaValue: () => void;
};

export const useSelectorValue = create<SelectorType>((set) => ({
  selValue: "",
  setAfricaValue: () => {
    set(() => ({ selValue: "Africa" }));
  },
  setAmericaValue: () => {
    set(() => ({ selValue: "America" }));
  },
  setAsiaValue: () => {
    set(() => ({ selValue: "Asia" }));
  },
  setEuropeValue: () => {
    set(() => ({ selValue: "Europe" }));
  },
  setOceaniaValue: () => {
    set(() => ({ selValue: "Oceania" }));
  },
}));
