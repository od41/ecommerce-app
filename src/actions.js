// these are the functions that change stuff in the redux store

// import constants
// write actions with dispatch argument
// write state actions with payload arguments


import {ADD_TO_CART} from './constants';

export const addToCart = (productId) => {

    return {
        type: ADD_TO_CART,
        payload: productId
        
    }
}