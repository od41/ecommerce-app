import React from 'react';

// redux
import {connect} from 'react-redux';

// actions
import { removeFromCart} from '../../../actions';

const mapDispatchToProps = (dispatch) => {
    return {
        removeFromCart: (product) => dispatch(removeFromCart(product))
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
        removeFromCart(product);
        
        // read product id
        // pass id to store
        // render on page (probably in app component)
    } 

    return(

        <button className="cart-delete" title="Remove From Cart" onClick={()=> props.removeFromCart(props.product)}>
            <i className="ti-trash"></i>
        </button>
    )
}


export default connect(null, mapDispatchToProps)(AddToCart);