import { create } from "zustand";

type DarkMode = {
  mode: boolean;
  change: () => void;
};

export const useDarkMode = create<DarkMode>((set) => ({
  mode: false,
  change: () => {
    set((state) => {
      const newMode = !state.mode;
      localStorage.setItem("darked", JSON.stringify(newMode));
      return { mode: newMode };
    });
  },
}));
