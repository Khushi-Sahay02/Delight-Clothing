import { combineReducers } from "redux";
import userReducer from "./user/userReducer";
import CartReducer from "./cart/cartReducer";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import directoryReducer from "./directory/directoryReducer";
import { shopReducer } from "./shop/shopReducer";

const rootReducer=combineReducers({
    user:userReducer,
    cart:CartReducer,
    sections:directoryReducer,
    shop:shopReducer
})

const persistConfig={
    key:'root',
    storage,
    whitelist:['cart']
}
export default  persistReducer(persistConfig,rootReducer);