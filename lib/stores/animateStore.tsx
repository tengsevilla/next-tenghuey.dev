// stores/navbarStageStore.ts

import { create } from "zustand";

export type Stage = "intro" | "animating" | "nav";

interface StageState {
    stage: Stage;
    setStage: (stage: Stage) => void;
}

export const useAnimateStore = create<StageState>((set) => ({
    stage: "intro",
    setStage: (stage) => set({ stage }),
}));