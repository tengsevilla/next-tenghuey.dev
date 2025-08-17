// stores/navbarStageStore.ts

import { create } from "zustand";

export type Navigation = "home" | "projects" | "notes" | "about" | "playlists" | "books" | "photos" | string;

interface NavState {
    nav: Navigation;
    setNav: (nav: Navigation) => void;
}

export const useNavStore = create<NavState>((set) => ({
    nav: "home",
    setNav: (nav) => set({ nav }),
}));