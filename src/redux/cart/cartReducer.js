
import { cartActionType } from "./cartActionType";
import { addItemToCart, deleteItem, clearItems} from "./cartUtils";

const INITIAL_STATE={
    hidden:true,
    cartitems:[]
};

const CartReducer=(state=INITIAL_STATE,action)=>{
    switch (action.type){
        case cartActionType.TOGGLE_CART_HIDDEN:
            return{
                ...state,
                hidden:!state.hidden
            };
        case cartActionType.CART_ITEM:
            return{
                ...state,
                cartitems:addItemToCart(state.cartitems,action.payload)
            };
        case cartActionType.DECREASE_ITEM:
            return{
                ...state,
                cartitems:clearItems(state.cartitems,action.payload)
            }
        case cartActionType.REMOVE_ITEM:
            return{
                ...state,
                cartitems:deleteItem(state.cartitems,action.payload)
            };
        default:
            return state;
    }
}
export default CartReducer;