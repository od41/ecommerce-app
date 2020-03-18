import React from 'react';
import {Link} from 'react-router-dom';

import AddToCart from './AddToCart';

const Product = ( product ) => {

    // console.log("Product Props: ", )


    return (
        

        <div className="col-md-6 col-xl-4">
            <div className="product-wrapper mb-30">

                <div className="product-img">
                    <Link
                        to={{
                            pathname: "/product-details",
                            search: "?product=" + product.product.id,
                        }}
                    >
                        <img src={product.product.photosmall} alt="" />
                    </Link>

                    <span>hot</span>
                    <div className="product-action">
                        <a className="animate-left" title="Wishlist" href="#dummy-link">
                            <i className="pe-7s-like"></i>
                        </a>
                        <AddToCart product={product.product} />
                        <a className="animate-right" title="Quick View" data-toggle="modal" data-target="#exampleModal" href="#dummy-link">
                            <i className="pe-7s-look"></i>
                        </a>
                    </div>
                </div>
                <div className="product-content">
                    <h4><a href="#dummy-link"> { product.product.name} </a></h4>
                    <span>${ product.product.price }</span>
                </div>
            </div>
        </div>
       
    )
}

export default Product;