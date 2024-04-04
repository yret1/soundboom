import * as actionTypes from "./shopping-types"

export interface Product {
    id: number;
    slug: string;
    name: string;
    image: {
        mobile: string;
        tablet: string;
        desktop: string;
    };
    category: string;
    categoryImage: {
        mobile: string;
        tablet: string;
        desktop: string;
    };
    new: boolean;
    price: number;
    description: string;
    features: string;
    includes: {
        quantity: number;
        item: string;
    }[];
    gallery: {
        first: {
            mobile: string;
            tablet: string;
            desktop: string;
        };
        second: {
            mobile: string;
            tablet: string;
            desktop: string;
        };
        third: {
            mobile: string;
            tablet: string;
            desktop: string;
        };
    };
    others: {
        slug: string;
        name: string;
        image: {
            mobile: string;
            tablet: string;
            desktop: string;
        };
    }[];
}

export interface ProductAdded {
    id: number;
    quant: number;
    slug: string;
    name: string;
    image: {
        mobile: string;
        tablet: string;
        desktop: string;
    };
    category: string;
    categoryImage: {
        mobile: string;
        tablet: string;
        desktop: string;
    };
    new: boolean;
    price: number;
    description: string;
    features: string;
    includes: {
        quantity: number;
        item: string;
    }[];
    gallery: {
        first: {
            mobile: string;
            tablet: string;
            desktop: string;
        };
        second: {
            mobile: string;
            tablet: string;
            desktop: string;
        };
        third: {
            mobile: string;
            tablet: string;
            desktop: string;
        };
    };
    others: {
        slug: string;
        name: string;
        image: {
            mobile: string;
            tablet: string;
            desktop: string;
        };
    }[];
}

interface State {
    products: Product[]; // Updated products array to use Product interface
    cart: ProductAdded[]; // Adjust other parts of the state as needed
    currentItem: Product | null; // Typing currentItem to be Product or null
}


const INITAL_STATE : State = {
    products: [], 
    cart: [],
    currentItem: null
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const shopReducer = (state = INITAL_STATE, action: { type: any; payload: any }) => {

    switch(action.type){
        case actionTypes.SET_CURRENT:
            return{
                ...state,
                currentItem: action.payload
            }
        break
        case actionTypes.ADD_TO_CART:
            // eslint-disable-next-line no-case-declarations
            const existingItemIndex = state.cart.findIndex(item => item.id === action.payload.id);

            if (existingItemIndex !== -1) {
                // Item already exists in cart, increase quantity
                return {
                    ...state,
                    cart: state.cart.map((item, index) =>
                        index === existingItemIndex ? { ...item, quant: item.quant + 1 } : item
                    )
                };
            } else {
                // Item doesn't exist in cart, add with quantity 1
                return {
                    ...state,
                    cart: [...state.cart, { ...action.payload, quant: 1 }]
                };
            }
        break

        case actionTypes.REMOVE_FROM_CART:
            return{}
        break
        case actionTypes.INCREASE_QUANTITY:
            return{}
        break
        case actionTypes.DECREASE_QUANTITY:
            // eslint-disable-next-line no-case-declarations
            const itemquantcheck = state.cart.findIndex(item => item.id === action.payload.id);
            if (itemquantcheck !== -1) {
                if (state.cart[itemquantcheck].quant > 1) {
                    return {
                        ...state,
                        cart: state.cart.map((item, index) =>
                            index === itemquantcheck ? { ...item, quant: item.quant - 1 } : item
                        )
                    };
                } else {
                    return {
                        ...state,
                        cart: state.cart.filter((item) => item.id !== action.payload.id)
                    };
                }
            }
        break
        case actionTypes.LOAD_CURRENT_ITEM:
            return{}
        break
        case actionTypes.ADD_PRODUCTS:
            return{
                ...state,
                products: action.payload,
            }
        default:
            return state
    }

}

export default shopReducer