import { create } from "zustand";

type Store = {
  isAuth: boolean;
  setIsAuth: (auth: boolean) => void;
};

export const useStore = create<Store>()((set) => ({
  isAuth: false,
  setIsAuth: (auth: boolean) => set(() => ({ isAuth: auth })),
}));
