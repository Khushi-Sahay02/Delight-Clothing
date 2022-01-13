import { createSelector } from "reselect";

const selectDirectory=state=>state.sections;

export const selectMenuSection=createSelector(
    [selectDirectory],
    (directory)=>directory.sections
);
