import React from 'react';

// redux
import {connect} from 'react-redux';

// actions
import {addToCart} from '../../../actions';

const mapStateToProps = (state) => {
    return {
        cart: state.cartStore,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addToCart: (cart, product) => dispatch(addToCart(cart, product))
    }
}

// const mapStateToProps = (state) => {
//     return {
//         cart: state.cart
//     }

// }

const AddToCart = (props) => {

    const addToCartListener = (e) => {
        e.preventDefault();
        const product = props.id;
        addToCart(product);
        
        // read product id
        // pass id to store
        // render on page (probably in app component)
    } 

    return(
        
        <button className="animate-top" title="Add To Cart" onClick={()=> props.addToCart(props.cart.products, props.product)}>
            <i className="pe-7s-cart"></i>
        </button>
    )
}


export default connect(mapStateToProps, mapDispatchToProps)(AddToCart);