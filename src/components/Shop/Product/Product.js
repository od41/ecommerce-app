import React from 'react';
// import 

const Product = ( product ) => {

    console.log("Inside Product.JS Component: ", product)
    console.log("Inside Product.JS Component: ", product.price)


    return (
        

        <div className="col-md-6 col-xl-4">
            <div className="product-wrapper mb-30">

                <div className="product-img">
                    <a href="#dummy-link">
                        <img src="{productItem.photo}" alt="" />
                    </a>
                    <span>hot</span>
                    <div className="product-action">
                        <a className="animate-left" title="Wishlist" href="#dummy-link">
                            <i className="pe-7s-like"></i>
                        </a>
                        <a className="animate-top" title="Add To Cart" href="#dummy-link">
                            <i className="pe-7s-cart"></i>
                        </a>
                        <a className="animate-right" title="Quick View" data-toggle="modal" data-target="#exampleModal" href="#dummy-link">
                            <i className="pe-7s-look"></i>
                        </a>
                    </div>
                </div>
                <div className="product-content">
                    <h4><a href="#dummy-link"> { product.name} </a></h4>
                    <span>${ product.price }</span>
                </div>
            </div>
        </div>
       
    )
}

export default Product;