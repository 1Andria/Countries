import { create } from "zustand";

type SearchType = {
  value: string;
};

type Action = {
  setValue: (value: SearchType["value"]) => void;
};

export const useSearchValue = create<SearchType & Action>((set) => ({
  value: "",
  setValue: (value) => set(() => ({ value: value })),
}));
