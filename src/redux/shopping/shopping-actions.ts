import { Product } from "../../utils/types"
import * as actionTypes from "./shopping-types"

export const addToCart = (ItemID : number) => {
    return {
        type: actionTypes.ADD_TO_CART,
        payload: {
            id:ItemID
        }
    }
}


export const removeFromCart = (ItemID : number) => {
    return {
        type: actionTypes.REMOVE_FROM_CART,
        payload: {
            id: ItemID
        }
    }
}

export const adjustQuantity = (ItemID : number, value : number) => {
    return {
        type: actionTypes.DECREASE_QUANTITY,
        payload: {
            id: ItemID,
            quantity: value
        }
    }
}

export const loadCurrentItem = (item : Product) => {
    return {
        type: actionTypes.LOAD_CURRENT_ITEM,
        payload: item
    }
}