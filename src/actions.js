// these are the functions that change stuff in the redux store

// import constants
// write actions with dispatch argument
// write state actions with payload arguments


import {ADD_TO_CART, REMOVE_FROM_CART, INCREMENT_CART} from './constants';

export const addToCart = (cart, product) => {

    // localStorage.setItem("cart", JSON.stringify(product)); 
    // the line above should probably be in the reducer.

    //  REFERENCE CODE FOR addToCart
    
//   handleAddToCart = (e, product) => {
//     this.setState(state => {
//       const cartItems = state.cartItems;
//       let productAlreadyInCart = false;

//       cartItems.forEach(cp => {
//         if (cp.id === product.id) {
//           cp.count += 1;
//           productAlreadyInCart = true;
//         }
//       });

//       if (!productAlreadyInCart) {
//         cartItems.push({ ...product, count: 1 });
//       }
//       localStorage.setItem("cartItems", JSON.stringify(cartItems));
//       return { cartItems: cartItems };
//     });
//   };

    let productInCart = false;
    let quantity = 1

    // check if product already exists in cart
    cart.forEach(cp => {
        if(cp.id === product.id) {
            quantity = cp.quantity + 1; // read the quantity information stored within the product already in the cart
            productInCart = true;
        }
    })


    //only returns true if the product in question is not already in the cart
    // also, only returns 1 product as quantity, that is the product is just entering the cart
    if (!productInCart) { 
        // if the product was not in the cart
        return {
            type: ADD_TO_CART,
            payload: product,
            quantity: quantity
        }
    }

    // increments the quantity of products already in store by 1
    return {
        type: INCREMENT_CART,
        payload: product,
        quantity: quantity
    }


    
}

export const removeFromCart = (product) => {
    return {
        type: REMOVE_FROM_CART,
        payload: product
    }
}