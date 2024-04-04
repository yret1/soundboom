import { combineReducers } from "redux";
import shopReducer from "./shopping/shopping-reducer"

// Define RootState type using ReturnType<typeof rootReducer>
export type RootState = ReturnType<typeof rootReducer>;


const rootReducer = combineReducers({
    shop: shopReducer,
});

export default rootReducer;