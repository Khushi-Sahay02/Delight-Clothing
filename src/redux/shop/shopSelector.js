import {createSelector} from 'reselect';

const selectShop=state=>state.shop;

export const selectShopItems=createSelector(
    [selectShop],
    (shop)=>shop.shopItems
)
export const selectCollectionOverview=createSelector(
    [selectShopItems],
    shopCollection=>Object.keys(shopCollection).map(key=>shopCollection[key])
)