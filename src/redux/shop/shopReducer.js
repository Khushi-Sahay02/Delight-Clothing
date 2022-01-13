import SHOP_DATA from "./collection_data";

const INITIAL_STATE={
    shopItems:SHOP_DATA,
};

export const shopReducer=(state=INITIAL_STATE,action)=>{
    switch (action.type){
        default:
            return state;
    }
}

