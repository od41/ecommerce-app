// import constants
// import combineReducers from redux if needed 
// set initial state of reducer 
// write reducer function that uses the switch case statement
// make sure reducer function returns a copy of the state object
// repeat as necessary for each reducer thing you need to track

import {ADD_TO_CART} from './constants';

import {combineReducers} from 'redux';

// set initial state

const initialState = {
    isInCart: false,
    quantity: 0,
    productId: 0,
}


const cartReducer = (state=initialState, action={}) => {
    
    switch(action.type){
        case ADD_TO_CART:
            return Object.assign({}, state, {isInCart: true, quantity: 1, productId: action.payload}); 

        default:
            return state;

    }
}

// export reducer
// export cartReducer;
export const rootReducer = combineReducers({
    cartReducer, 
})