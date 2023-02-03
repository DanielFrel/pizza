import { RootState } from "../store";

export const selectFilter = (store: RootState) => store.filter;
export const selectSort = (store: RootState) => store.filter.sort;
