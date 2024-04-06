import { combineReducers } from "redux";
import shopReducer from "./shopping/shopping-reducer"

import { Product, ProductAdded } from "./shopping/shopping-reducer";

// Define RootState type using ReturnType<typeof rootReducer>



const rootReducer = combineReducers({
    shop: shopReducer,
});

export type RootState = ReturnType<typeof rootReducer>;


export type State = {
    shop: {
        currentItem: Product | null;
        cart: ProductAdded[];
        products: Product[];
      }
}
export default rootReducer;