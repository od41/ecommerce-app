// import constants
// import combineReducers from redux if needed 
// set initial state of reducer 
// write reducer function that uses the switch case statement
// make sure reducer function returns a copy of the state object
// repeat as necessary for each reducer thing you need to track

import {ADD_TO_CART, REMOVE_FROM_CART, INCREMENT_CART} from './constants';

import {combineReducers} from 'redux';

// set initial state

// const initialState = {
//     isInCart: false,
//     quantity: 0,
//     productId: 0,
// }


// const cartReducer = (state=initialState, action={}) => {
    
//     switch(action.type){
//         case ADD_TO_CART_CLICKED:
//             return Object.assign({}, state, {isInCart: true, quantity: 1, productId: action.payload}); 

//         default:
//             return state;

//     }
// }

// stores cart id implementation
const emptyCart = {
    products: []
}

const cartStore = (state=emptyCart, action={}) => {
    // when addToCart is detected it creates a new object with the product id and quantity set to 1
    switch(action.type) {
        case INCREMENT_CART:
             action.payload.quantity=action.quantity;
            //  i want to copy and then update only the quantity of the product object that matches in the store
            return {...state,
                    products: [...state.products,  action.payload] 
                    // products: [...state.products, action.payload ] 
                    }

        case ADD_TO_CART:
            // as is already familiar, create a new object entry with the new object to the cart
            action.payload.quantity=action.quantity;
            return {...state,
                products: [...state.products,  action.payload] 
            }

        case REMOVE_FROM_CART:
            console.log( "state> ", state.products[0]);
            console.log( "payload> ", action.payload);
            console.log( "are they equal? >>>", state.products[0] === action.payload);

            return {
                    products: [...state.products.filter(product => product !== action.payload )]
                };

        default:
            return state;
    }
}
// export reducer
// export cartReducer;
export const rootReducer = combineReducers({
    cartStore
})