import { create } from "zustand";

type WorldType = {
  world: Array<string>;
  setWorld: (data: Array<string>) => void;
};
export const useWorldData = create<WorldType>((set) => ({
  world: [],
  setWorld: (data) => set({ world: data }),
}));
