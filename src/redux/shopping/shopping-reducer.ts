import * as actionTypes from "./shopping-types"

interface Product {
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

interface ProductAdded {
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
const shopReducer = (state = INITAL_STATE, action: { type: any; }) => {

    switch(action.type){
        case actionTypes.ADD_TO_CART:
            return {}
        break
        case actionTypes.REMOVE_FROM_CART:
            return{}
        break
        case actionTypes.ADJUST_QUANTITY:
            return{}
        break
        case actionTypes.LOAD_CURRENT_ITEM:
            return{}
        break
        default:
            return state
    }

}

export default shopReducer