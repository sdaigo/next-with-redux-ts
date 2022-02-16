import { AppState } from "@store";

export const countSelector = (state: AppState) => state.counter.value;
export const statusSelector = (state: AppState) => state.counter.status;
