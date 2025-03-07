import { create } from "zustand";

type DarkMode = {
  mode: boolean;
  change: () => void;
};

export const useDarkMode = create<DarkMode>((set) => ({
  mode: false,
  change: () => {
    set((state) => ({ mode: !state.mode }));
  },
}));
