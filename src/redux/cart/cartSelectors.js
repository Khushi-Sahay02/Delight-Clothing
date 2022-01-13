import {createSelector} from 'reselect';

const selectcart=state=>state.cart;

export const selectCartItems=createSelector(
    [selectcart],
    (cart)=>cart.cartitems
);

export const selectHiddenProp=createSelector(
    [selectcart],
    (cart)=>cart.hidden
)

export const selectCartItemsCount=createSelector(
    [selectCartItems],
    cartitems=>cartitems.reduce
    ((accvalue,cartitem)=>accvalue+cartitem.quantity,0)
);

export const selectCartItemsCost=createSelector(
    [selectCartItems],
    cartitems=>cartitems.reduce(
        (accvalue,cartitem)=>accvalue+(cartitem.quantity*cartitem.price),0
    )
)