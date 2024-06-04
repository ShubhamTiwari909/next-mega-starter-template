import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

// Define the state and action types
interface State {
  loggedIn: boolean;
  setLoggedIn: (loggedIn: boolean) => void;
}

// Create the Zustand store with type definitions and persistence
export const useStore = create<State>()(
  persist(
    (set) => ({
      loggedIn: false, // use false for boolean
      setLoggedIn: (loggedIn: boolean) => set({ loggedIn }),
    }),
    {
      name: "food-storage", // name of the item in the storage (must be unique)
      storage: createJSONStorage(() => sessionStorage), // (optional) by default, 'localStorage' is used
    },
  ),
);
