import React from 'react';

class Sidebar extends React.Component {
    render() {
        return (
            
            <div className="col-lg-3">
                <div className="shop-sidebar mr-50">
                    <div className="sidebar-widget mb-50">
                        <h3 className="sidebar-title">Search Products</h3>
                        <div className="sidebar-search">
                            <form action="#">
                                <input placeholder="Search Products..." type="text" />
                                <button><i className="ti-search"></i></button>
                            </form>
                        </div>
                    </div>
                    <div className="sidebar-widget mb-40">
                        <h3 className="sidebar-title">Filter by Price</h3>
                        <div className="price_filter">
                            <div id="slider-range"></div>
                            <div className="price_slider_amount">
                                <div className="label-input">
                                    <label>price : </label>
                                    <input type="text" id="amount" name="price"  placeholder="Add Your Price" />
                                </div>
                                <button type="button">Filter</button> 
                            </div>
                        </div>
                    </div>
                    <div className="sidebar-widget mb-45">
                        <h3 className="sidebar-title">Categories</h3>
                        <div className="sidebar-categories">
                            <ul>
                                <li><a href="#dummy-linkdummy-link">Accessories <span>4</span></a></li>
                                <li><a href="#dummy-link">Book <span>9</span></a></li>
                                <li><a href="#dummy-link">Clothing <span>5</span> </a></li>
                                <li><a href="#dummy-link">Homelife <span>3</span></a></li>
                                <li><a href="#dummy-link">Kids & Baby <span>4</span></a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="sidebar-widget sidebar-overflow mb-45">
                        <h3 className="sidebar-title">color</h3>
                        <div className="product-color">
                            <ul>
                                <li className="red">b</li>
                                <li className="pink">p</li>
                                <li className="blue">b</li>
                                <li className="sky">b</li>
                                <li className="green">y</li>
                                <li className="purple">g</li>
                            </ul>
                        </div>
                    </div>
                    <div className="sidebar-widget mb-40">
                        <h3 className="sidebar-title">size</h3>
                        <div className="product-size">
                            <ul>
                                <li><a href="#dummy-link">xl</a></li>
                                <li><a href="#dummy-link">m</a></li>
                                <li><a href="#dummy-link">l</a></li>
                                <li><a href="#dummy-link">ml</a></li>
                                <li><a href="#dummy-link">lm</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="sidebar-widget mb-50">
                        <h3 className="sidebar-title">Top rated products</h3>
                        <div className="sidebar-top-rated-all">
                            <div className="sidebar-top-rated mb-30">
                                <div className="single-top-rated">
                                    <div className="top-rated-img">
                                        <a href="#dummy-link"><img src="assets/img/product/sidebar-product/1.jpg" alt="" /></a>
                                    </div>
                                    <div className="top-rated-text">
                                        <h4><a href="#dummy-link">Flying Drone</a></h4>
                                        <div className="top-rated-rating">
                                            <ul>
                                                <li><i className="pe-7s-star"></i></li>
                                                <li><i className="pe-7s-star"></i></li>
                                                <li><i className="pe-7s-star"></i></li>
                                                <li><i className="pe-7s-star"></i></li>
                                                <li><i className="pe-7s-star"></i></li>
                                            </ul>
                                        </div>
                                        <span>$140.00</span>
                                    </div>
                                </div>
                            </div>
                            <div className="sidebar-top-rated mb-30">
                                <div className="single-top-rated">
                                    <div className="top-rated-img">
                                        <a href="#dummy-link"><img src="assets/img/product/sidebar-product/2.jpg" alt="" /></a>
                                    </div>
                                    <div className="top-rated-text">
                                        <h4><a href="#dummy-link">Flying Drone</a></h4>
                                        <div className="top-rated-rating">
                                            <ul>
                                                <li><i className="pe-7s-star"></i></li>
                                                <li><i className="pe-7s-star"></i></li>
                                                <li><i className="pe-7s-star"></i></li>
                                                <li><i className="pe-7s-star"></i></li>
                                                <li><i className="pe-7s-star"></i></li>
                                            </ul>
                                        </div>
                                        <span>$140.00</span>
                                    </div>
                                </div>
                            </div>
                            <div className="sidebar-top-rated mb-30">
                                <div className="single-top-rated">
                                    <div className="top-rated-img">
                                        <a href="#dummy-link"><img src="assets/img/product/sidebar-product/3.jpg" alt="" /></a>
                                    </div>
                                    <div className="top-rated-text">
                                        <h4><a href="#dummy-link">Flying Drone</a></h4>
                                        <div className="top-rated-rating">
                                            <ul>
                                                <li><i className="pe-7s-star"></i></li>
                                                <li><i className="pe-7s-star"></i></li>
                                                <li><i className="pe-7s-star"></i></li>
                                                <li><i className="pe-7s-star"></i></li>
                                                <li><i className="pe-7s-star"></i></li>
                                            </ul>
                                        </div>
                                        <span>$140.00</span>
                                    </div>
                                </div>
                            </div>
                            <div className="sidebar-top-rated mb-30">
                                <div className="single-top-rated">
                                    <div className="top-rated-img">
                                        <a href="#dummy-link"><img src="assets/img/product/sidebar-product/4.jpg" alt="" /></a>
                                    </div>
                                    <div className="top-rated-text">
                                        <h4><a href="#dummy-link">Flying Drone</a></h4>
                                        <div className="top-rated-rating">
                                            <ul>
                                                <li><i className="pe-7s-star"></i></li>
                                                <li><i className="pe-7s-star"></i></li>
                                                <li><i className="pe-7s-star"></i></li>
                                                <li><i className="pe-7s-star"></i></li>
                                                <li><i className="pe-7s-star"></i></li>
                                            </ul>
                                        </div>
                                        <span>$140.00</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        )
    }
}

export default Sidebar;