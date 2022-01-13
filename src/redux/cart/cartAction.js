import { cartActionType } from "./cartActionType";

export const ToggleCart=()=>({
    type:cartActionType.TOGGLE_CART_HIDDEN
});

export const additems=(item)=>({
    type:cartActionType.CART_ITEM,
    payload:item
});

export const removeItems=item=>({
    type:cartActionType.REMOVE_ITEM,
    payload:item
});

export const decreaseItems=item=>({
    type:cartActionType.DECREASE_ITEM,
    payload:item
});