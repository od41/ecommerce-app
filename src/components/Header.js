import React from 'react';

// redux
import {connect} from 'react-redux';
import CartPopup from './Shop/CartPopup';

const mapStateToProps = (state) => {
    return {
        productId: state.cartStore,
    }
}

class Header extends React.Component {

    constructor() {
        super();
    }
    

    render() {
        
        return (
            <div>
                <header>
                    <div className="header-top-furniture wrapper-padding-2 res-header-sm">
                        <div className="container-fluid">
                            <div className="header-bottom-wrapper">
                                <div className="logo-2 furniture-logo ptb-30">
                                    <a href="/">
                                        <img src="assets/img/logo/2.png" alt="" />
                                    </a>
                                </div>
                                {/* <div className="menu-style-2 furniture-menu menu-hover">
                                    <nav>
                                        <ul>
                                            <li><a href="#dummy-link">home</a>
                                                <ul className="single-dropdown">
                                                    <li><a href="/">Fashion</a></li>
                                                    <li><a href="index-fashion-2.html">Fashion style 2</a></li>
                                                    <li><a href="index-fruits.html">fruits</a></li>
                                                    <li><a href="index-book.html">book</a></li>
                                                    <li><a href="index-electronics.html">electronics</a></li>
                                                    <li><a href="index-electronics-2.html">electronics style 2</a></li>
                                                    <li><a href="index-food.html">food &amp; drink</a></li>
                                                    <li><a href="index-furniture.html">furniture</a></li>
                                                    <li><a href="index-handicraft.html">handicraft</a></li>
                                                    <li><a target="_blank" href="index-smart-watch.html">smart watch</a></li>
                                                    <li><a href="index-sports.html">sports</a></li>
                                                </ul>
                                            </li>
                                            <li><a href="#dummy-link">pages</a>
                                                <ul className="single-dropdown">
                                                    <li><a href="about-us.html">about us</a></li>
                                                    <li><a href="menu-list.html">menu list</a></li>
                                                    <li><a href="login.html">login</a></li>
                                                    <li><a href="register.html">register</a></li>
                                                    <li><a href="cart.html">cart page</a></li>
                                                    <li><a href="checkout.html">checkout</a></li>
                                                    <li><a href="wishlist.html">wishlist</a></li>
                                                    <li><a href="contact.html">contact</a></li>
                                                </ul>
                                            </li>
                                            <li><a href="shop.html">shop</a>
                                                <div className="category-menu-dropdown shop-menu">
                                                    <div className="category-dropdown-style category-common2 mb-30">
                                                        <h4 className="categories-subtitle"> shop layout</h4>
                                                        <ul>
                                                            <li><a href="shop-grid-2-col.html"> grid 2 column</a></li>
                                                            <li><a href="shop-grid-3-col.html"> grid 3 column</a></li>
                                                            <li><a href="shop.html">grid 4 column</a></li>
                                                            <li><a href="shop-grid-box.html">grid box style</a></li>
                                                            <li><a href="shop-list-1-col.html"> list 1 column</a></li>
                                                            <li><a href="shop-list-2-col.html">list 2 column</a></li>
                                                            <li><a href="shop-list-box.html">list box style</a></li>
                                                            <li><a href="cart.html">shopping cart</a></li>
                                                            <li><a href="wishlist.html">wishlist</a></li>
                                                        </ul>
                                                    </div>
                                                    <div className="category-dropdown-style category-common2 mb-30">
                                                        <h4 className="categories-subtitle"> product details</h4>
                                                        <ul>
                                                            <li><a href="product-details.html">tab style 1</a></li>
                                                            <li><a href="product-details-2.html">tab style 2</a></li>
                                                            <li><a href="product-details-3.html"> tab style 3</a></li>
                                                            <li><a href="product-details-4.html">sticky style</a></li>
                                                            <li><a href="product-details-5.html">sticky style 2</a></li>
                                                            <li><a href="product-details-6.html">gallery style</a></li>
                                                            <li><a href="product-details-7.html">gallery style 2</a></li>
                                                            <li><a href="product-details-8.html">fixed image style</a></li>
                                                            <li><a href="product-details-9.html">fixed image style 2</a></li>
                                                        </ul>
                                                    </div>
                                                    <div className="mega-banner-img">
                                                        <a href="single-product.html">
                                                            <img src="assets/img/banner/18.jpg" alt="" />
                                                        </a>
                                                    </div>
                                                </div>
                                            </li>
                                            <li><a href="blog.html">blog</a>
                                                <ul className="single-dropdown">
                                                    <li><a href="blog.html">blog 3 colunm</a></li>
                                                    <li><a href="blog-2-col.html">blog 2 colunm</a></li>
                                                    <li><a href="blog-sidebar.html">blog sidebar</a></li>
                                                    <li><a href="blog-details.html">blog details</a></li>
                                                    <li><a href="blog-details-sidebar.html">blog details 2</a></li>
                                                </ul>
                                            </li>
                                            <li><a href="contact.html">contact</a></li>
                                        </ul>
                                    </nav>
                                </div> */}
                                <CartPopup />
                            </div>
                            {/* <div className="row">
                                <div className="mobile-menu-area d-md-block col-md-12 col-lg-12 col-12 d-lg-none d-xl-none">
                                    <div className="mobile-menu">
                                        <nav id="mobile-menu-active" style={{display: "block"}}>
                                            <ul className="menu-overflow">
                                                <li><a href="#dummy-link">HOME</a>
                                                    <ul>
                                                        <li><a href="/">Fashion</a></li>
                                                        <li><a href="index-fashion-2.html">Fashion style 2</a></li>
                                                        <li><a href="index-fruits.html">Fruits</a></li>
                                                        <li><a href="index-book.html">book</a></li>
                                                        <li><a href="index-electronics.html">electronics</a></li>
                                                        <li><a href="index-electronics-2.html">electronics style 2</a></li>
                                                        <li><a href="index-food.html">food &amp; drink</a></li>
                                                        <li><a href="index-furniture.html">furniture</a></li>
                                                        <li><a href="index-handicraft.html">handicraft</a></li>
                                                        <li><a href="index-smart-watch.html">smart watch</a></li>
                                                        <li><a href="index-sports.html">sports</a></li>
                                                    </ul>
                                                </li>
                                                <li><a href="#dummy-link">pages</a>
                                                    <ul>
                                                        <li><a href="about-us.html">about us</a></li>
                                                        <li><a href="menu-list.html">menu list</a></li>
                                                        <li><a href="login.html">login</a></li>
                                                        <li><a href="register.html">register</a></li>
                                                        <li><a href="cart.html">cart page</a></li>
                                                        <li><a href="checkout.html">checkout</a></li>
                                                        <li><a href="wishlist.html">wishlist</a></li>
                                                        <li><a href="contact.html">contact</a></li>
                                                    </ul>
                                                </li>
                                                <li><a href="#dummy-link">shop</a>
                                                    <ul>
                                                        <li><a href="shop-grid-2-col.html"> grid 2 column</a></li>
                                                        <li><a href="shop-grid-3-col.html"> grid 3 column</a></li>
                                                        <li><a href="shop.html">grid 4 column</a></li>
                                                        <li><a href="shop-grid-box.html">grid box style</a></li>
                                                        <li><a href="shop-list-1-col.html"> list 1 column</a></li>
                                                        <li><a href="shop-list-2-col.html">list 2 column</a></li>
                                                        <li><a href="shop-list-box.html">list box style</a></li>
                                                        <li><a href="product-details.html">tab style 1</a></li>
                                                        <li><a href="product-details-2.html">tab style 2</a></li>
                                                        <li><a href="product-details-3.html"> tab style 3</a></li>
                                                        <li><a href="product-details-4.html">sticky style</a></li>
                                                        <li><a href="product-details-5.html">sticky style 2</a></li>
                                                        <li><a href="product-details-6.html">gallery style</a></li>
                                                        <li><a href="product-details-7.html">gallery style 2</a></li>
                                                        <li><a href="product-details-8.html">fixed image style</a></li>
                                                        <li><a href="product-details-9.html">fixed image style 2</a></li>
                                                    </ul>
                                                </li>
                                                <li><a href="#dummy-link">BLOG</a>
                                                    <ul>
                                                        <li><a href="blog.html">blog 3 colunm</a></li>
                                                        <li><a href="blog-2-col.html">blog 2 colunm</a></li>
                                                        <li><a href="blog-sidebar.html">blog sidebar</a></li>
                                                        <li><a href="blog-details.html">blog details</a></li>
                                                        <li><a href="blog-details-sidebar.html">blog details 2</a></li>
                                                    </ul>
                                                </li>
                                                <li><a href="contact.html"> Contact  </a></li>
                                            </ul>
                                        </nav>							
                                    </div>
                                </div>
                            </div> */}
                        </div>
                    </div>
                    <div className="header-bottom-furniture wrapper-padding-2 border-top-3">
                        <div className="container-fluid">
                            <div className="furniture-bottom-wrapper">
                                <div className="furniture-login">
                                    <ul>
                                        <li>Get Access: <a href="login.html">Login </a></li>
                                        <li><a href="register.html">Reg </a></li>
                                    </ul>
                                </div>
                                <div className="furniture-search">
                                    <form action="#">
                                        <input placeholder="I am Searching for . . ." type="text" />
                                        <button>
                                            <i className="ti-search"></i>
                                        </button>
                                    </form>
                                </div>
                                <div className="furniture-wishlist">
                                    <ul>
                                        {/* <li><a data-toggle="modal" data-target="#exampleCompare" href="#dummy-link"><i className="ti-reload"></i> Compare</a></li> */}
                                        <li><a href="wishlist.html"><i className="ti-heart"></i> Wishlist</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </header>
            </div>
        )
    }
}

export default connect(mapStateToProps)(Header);