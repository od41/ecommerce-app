import React from "react";

class Product extends React.Component {
    render() {
        return (

            <div className="product-wrapper mb-30">
                <div className="product-img">
                    <a href="#dummy-link">
                        <img src="assets/img/product/fashion-colorful/1.jpg" alt="" />
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
                    <h4><a href="#dummy-link"> Dagger Smart Trousers </a></h4>
                    <span>$115.00</span>
                </div>
            </div>
       
        )
    }
}

export default Product;