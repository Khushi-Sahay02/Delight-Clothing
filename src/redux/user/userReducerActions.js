import { userActionTypes } from "./userActionTypes";

export const setUser=user=>({
    type:userActionTypes.SET_CURRENT_USER,
    payload:user
}); 