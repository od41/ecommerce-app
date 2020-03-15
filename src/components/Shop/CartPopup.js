import React from 'react';
import { Link } from 'react-router-dom';

import productDb from '../../products.json';

// redux
import {connect} from 'react-redux';

import RemoveFromCart from './Product/RemoveFromCart'

const mapStateToProps = (state) => {
    return {
        productId: state.cartStore,
    }
}


class CartPopup extends React.Component {

    renderPriceOfProductsInCart () {
        let prices = 0;

        const productStore = new Array(productDb.products).flat();
        const productsInCart = Object.values(this.props.productId)[0];

        if(productsInCart.length) {
            productsInCart.map((product) => {
                
                if(productStore.find(el => Object.values(el)[0] === product.id ) ) {
                    // this loops through the product ids that have been added to the cart, 
                    // adds all the prices together

                    const currentProduct  = productStore[product.id-1]
    
                    prices += +currentProduct.price
                } else {
                    return 0
                }
            });
        }
        

        return prices;
    }

    renderProductInCart() {
        const productStore = new Array(productDb.products).flat();
        // console.log(">>> debug productstore: What's the first element", productStore.indexOf({id: '001'}) )
        // const productsInCart = new Array(this.props.productId)[0];
        const productsInCart = Object.values(this.props.productId)[0];
        // console.log('>>> debugging productsInCart', productsInCart.find(el => Object.entries(el).toString() === Object.entries({id:'002'}).toString()) );

       
        let displayProducts = [];

        if(productsInCart.length) {
            displayProducts = productsInCart.map((product) => {
                
                if(productStore.find(el => Object.values(el)[0] === product.id ) ) {
                    // this loops through the product ids that have been added to the cart, and renders that 
                    // product on the drop down menu pop up

                    const currentProduct  = productStore[product.id-1]
    
                    return (
                        <li className="single-product-cart">
                            <div className="cart-img">
                                <a href="#dummy-link"><img src={currentProduct.photosmall} width="82" alt="" /></a>
                            </div> 
                            <div className="cart-title">
                                <h5><a href="#dummy-link"> { currentProduct.name}</a></h5>
                                <h6><a href="#dummy-link">Black</a></h6>
                                <span>${ currentProduct.price }</span>
                            </div>
                            <RemoveFromCart id={currentProduct.id} />
                        </li>
                    )
                } else {
                    return [] 
                }
            });
        }
        

        return displayProducts;
    }

    render() {
        const {productId} = this.props;
        const products = this.renderProductInCart()
        const prices = this.renderPriceOfProductsInCart();

        return (
            <div className="header-cart">
                                    <a className="icon-cart-furniture" href="#dummy-link">
                                        <i className="ti-shopping-cart"></i>
                                            {
                                                productId.products.length !==0 ? (
                                                    <span className="shop-count-furniture green"> {productId.products.length} </span>
                                                ) : (
                                                    <span className="shop-count-furniture green"> 0 </span>
                                                )
                                            }
                                    </a>
                                    <ul className="cart-dropdown">
                                        

                                        { products.length ? (
                                            products
                                        ) : (
                                            
                                            <div className="cart-sub">
                                                <h4>Empty cart</h4>
                                                <hr/>
                                            </div>
                                        ) }
                                        {
                                            products.length ? (
                                                <li className="cart-space">
                                                    <div className="cart-sub">
                                                        <h4>Subtotal</h4>
                                                    </div>
                                                    <div className="cart-price">
                                                    <h4>${prices}</h4>
                                                        
                                                    </div>
                                                </li>
                                            ) : (
                                                ''
                                            )
                                        }
                                        
                                        <li className="cart-btn-wrapper">
                                            <Link
                                                className="cart-btn btn-hover"
                                                to="/cart"
                                                >
                                                view cart
                                            </Link>
                                            {/* <a className="cart-btn btn-hover" href="#dummy-link">view cart</a> */}
                                            <Link
                                                className="cart-btn btn-hover"
                                                to="/checkout"
                                                >
                                                checkout
                                            </Link>
                                            {/* <a className="cart-btn btn-hover" href="#dummy-link">checkout</a> */}
                                        </li>
                                    </ul>
                                </div>
        )
    }
}


export default connect(mapStateToProps)(CartPopup);