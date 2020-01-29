import React from 'react';
import queryString from 'query-string';
import productDb from '../products.json';


class ProductDetail extends React.Component {

    constructor(props) {
        super();
        this.state = {
            productList: [],
        }
    }

    componentDidMount() {
        // read the query string from the url
        const values = queryString.parse(this.props.location.search);

        // const params = new URLSearchParams(location);

        // console.log("Search Params: ", params.get('product'));



        // read the product data from db into array
        const productArray = new Array(productDb.products).flat();

        // filter by productid for the product you want from the query string
        const filteredProduct = productArray.filter(product => product.id === values.product);

        // pass on for display
        this.setState({
            productList: filteredProduct
        })

    }

    render() {

        // const product = this.state.productList[0];
        let product;
        (this.state.productList[0] != null ? product = this.state.productList[0] : product = "not defined");

        return(
            <div>
                
                <div className="product-details pt-100 pb-80">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 col-lg-7 col-12">
                            <div className="product-details-4 pr-70">
                                <div className="easyzoom easyzoom--overlay">
                                    <a href={product.photolarge}>
                                        <img src=  {product.photosmall }  alt="" />
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-12 col-lg-5 col-12">
                            <div className="product-details-content">
                                <h3>{product.name }</h3>
                                <div className="rating-number">
                                    <div className="quick-view-rating">
                                        <i className="pe-7s-star"></i>
                                        <i className="pe-7s-star"></i>
                                        <i className="pe-7s-star"></i>
                                        <i className="pe-7s-star"></i>
                                        <i className="pe-7s-star"></i>
                                    </div>
                                    <div className="quick-view-number">
                                        <span>2 Rating (S)</span>
                                    </div>
                                </div>
                                <div className="details-price">
                                    <span>${product.price }</span>
                                </div>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmol tempor incidid ut labore et dolore magna aliqua. Ut enim ad minim veni quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in</p>
                                <div className="product-color-2">
                                    <h4 className="details-title">Color*</h4>
                                    <div className="product-color-style2">
                                        <ul>
                                            <li className="orange"></li>
                                            <li className="blue2"></li>
                                            <li className="pink"></li>
                                            <li className="yellow"></li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="product-size-2">
                                    <h4 className="details-title">Size*</h4>
                                    <div className="product-size-style2">
                                        <ul>
                                            <li><a href="#">xl</a></li>
                                            <li><a href="#">ml</a></li>
                                            <li><a href="#">m</a></li>
                                            <li><a href="#">sl</a></li>
                                            <li><a href="#">ls</a></li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="quickview-plus-minus">
                                    <div className="cart-plus-minus">
                                        <input type="text" value="02" name="qtybutton" className="cart-plus-minus-box" />
                                    </div>
                                    <div className="quickview-btn-cart">
                                        <a className="btn-hover-black" href="#">add to cart</a>
                                    </div>
                                    <div className="quickview-btn-wishlist">
                                        <a className="btn-hover" href="#"><i className="pe-7s-like"></i></a>
                                    </div>
                                </div>
                                <div className="product-details-cati-tag mt-35">
                                    <ul>
                                        <li className="categories-title">Categories :</li>
                                        <li><a href="#">{product.category }</a></li>
                                        {/* <li><a href="#">electronics</a></li>
                                        <li><a href="#">toys</a></li>
                                        <li><a href="#">food</a></li>
                                        <li><a href="#">jewellery</a></li> */}
                                    </ul>
                                </div>
                                <div className="product-details-cati-tag mtb-10">
                                    <ul>
                                        <li className="categories-title">Tags :</li>
                                        <li><a href="#">fashion</a></li>
                                        <li><a href="#">electronics</a></li>
                                        <li><a href="#">toys</a></li>
                                        <li><a href="#">food</a></li>
                                        <li><a href="#">jewellery</a></li>
                                    </ul>
                                </div>
                                <div className="bundle-area">
                                    <h3>Buy this bundle and get off to 35%</h3>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmol tempor incidid ut labore et dolore magna aliqua.</p>
                                    <div className="bundle-img">
                                        <div className="single-bundle-img">
                                            <a href="product-details-6.html"><img src="assets/img/product-details/s1-details4.jpg" alt="" /></a>
                                        </div>
                                        <div className="single-bundle-img">
                                            <a href="product-details-6.html"><img src="assets/img/product-details/s2-details4.jpg" alt="" /></a>
                                        </div>
                                        <div className="single-bundle-img">
                                            <a href="product-details-6.html"><img src="assets/img/product-details/s3-details4.jpg" alt="" /></a>
                                        </div>
                                    </div>
                                    <div className="bundle-all-price">
                                        <div className="bundle-price">
                                            <ul>
                                                <li>White drone with remote  <span>$400</span> - $250</li>
                                                <li>Black drone with remote <span>$300</span> - $200</li>
                                                <li>Colorful drone with remote  <span>$600</span> - $300</li>
                                            </ul>
                                        </div>
                                        <div className="bundle-result">
                                            <h4>Price For All : <span> <span className="bundle-cross"> $1300</span> - $750</span></h4>
                                        </div>
                                    </div>
                                    <div className="bundle-cart">
                                        <a className="btn-hover-black bundle-btn" href="#">add bundle to cart</a>
                                    </div>
                                    <div className="product-details5-social">
                                        <ul>
                                            <li>
                                                <a href="#">
                                                    <i className="icofont icofont-social-facebook"></i>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#">
                                                    <i className="icofont icofont-social-twitter"></i>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#">
                                                    <i className="icofont icofont-social-pinterest"></i>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#">
                                                    <i className="icofont icofont-social-flikr"></i>
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="product-description-review-area pb-90">
                <div className="container">
                    <div className="product-description-review text-center">
                        <div className="description-review-title nav" role="tablist">
                            <a className="active" href="#pro-dec" data-toggle="tab" role="tab" aria-selected="true">
                                Description
                            </a>
                            <a href="#pro-review" data-toggle="tab" role="tab" aria-selected="false">
                                Reviews (0)
                            </a>
                        </div>
                        <div className="description-review-text tab-content">
                            <div className="tab-pane active show fade" id="pro-dec" role="tabpanel">
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in</p>
                            </div>
                            <div className="tab-pane fade" id="pro-review" role="tabpanel">
                                <a href="#">Be the first to write your review!</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- product area start --> */}
            <div className="product-area pb-95">
                <div className="container">
                    <div className="section-title-3 text-center mb-50">
                        <h2>Related products</h2>
                    </div>
                    <div className="product-style">
                        <div className="related-product-active owl-carousel">
                            <div className="product-wrapper">
                                <div className="product-img">
                                    <a href="#">
                                        <img src="assets/img/product/fashion-colorful/1.jpg" alt="" />
                                    </a>
                                    <span>hot</span>
                                    <div className="product-action">
                                        <a className="animate-left" title="Wishlist" href="#">
                                            <i className="pe-7s-like"></i>
                                        </a>
                                        <a className="animate-top" title="Add To Cart" href="#">
                                            <i className="pe-7s-cart"></i>
                                        </a>
                                        <a className="animate-right" title="Quick View" data-toggle="modal" data-target="#exampleModal" href="#">
                                            <i className="pe-7s-look"></i>
                                        </a>
                                    </div>
                                </div>
                                <div className="product-content">
                                    <h4><a href="#">Arifo Stylas Dress</a></h4>
                                    <span>$115.00</span>
                                </div>
                            </div>
                            <div className="product-wrapper">
                                <div className="product-img">
                                    <a href="#">
                                        <img src="assets/img/product/fashion-colorful/2.jpg" alt="" />
                                    </a>
                                    <div className="product-action">
                                        <a className="animate-left" title="Wishlist" href="#">
                                            <i className="pe-7s-like"></i>
                                        </a>
                                        <a className="animate-top" title="Add To Cart" href="#">
                                            <i className="pe-7s-cart"></i>
                                        </a>
                                        <a className="animate-right" title="Quick View" data-toggle="modal" data-target="#exampleModal" href="#">
                                            <i className="pe-7s-look"></i>
                                        </a>
                                    </div>
                                </div>
                                <div className="product-content">
                                    <h4><a href="#">Arifo Stylas Dress</a></h4>
                                    <span>$115.00</span>
                                </div>
                            </div>
                            <div className="product-wrapper">
                                <div className="product-img">
                                    <a href="#">
                                        <img src="assets/img/product/fashion-colorful/3.jpg" alt="" />
                                    </a>
                                    <span>hot</span>
                                    <div className="product-action">
                                        <a className="animate-left" title="Wishlist" href="#">
                                            <i className="pe-7s-like"></i>
                                        </a>
                                        <a className="animate-top" title="Add To Cart" href="#">
                                            <i className="pe-7s-cart"></i>
                                        </a>
                                        <a className="animate-right" title="Quick View" data-toggle="modal" data-target="#exampleModal" href="#">
                                            <i className="pe-7s-look"></i>
                                        </a>
                                    </div>
                                </div>
                                <div className="product-content">
                                    <h4><a href="#">Arifo Stylas Dress</a></h4>
                                    <span>$115.00</span>
                                </div>
                            </div>
                            <div className="product-wrapper">
                                <div className="product-img">
                                    <a href="#">
                                        <img src="assets/img/product/fashion-colorful/4.jpg" alt="" />
                                    </a>
                                    <div className="product-action">
                                        <a className="animate-left" title="Wishlist" href="#">
                                            <i className="pe-7s-like"></i>
                                        </a>
                                        <a className="animate-top" title="Add To Cart" href="#">
                                            <i className="pe-7s-cart"></i>
                                        </a>
                                        <a className="animate-right" title="Quick View" data-toggle="modal" data-target="#exampleModal" href="#">
                                            <i className="pe-7s-look"></i>
                                        </a>
                                    </div>
                                </div>
                                <div className="product-content">
                                    <h4><a href="#">Arifo Stylas Dress</a></h4>
                                    <span>$115.00</span>
                                </div>
                            </div>
                            <div className="product-wrapper">
                                <div className="product-img">
                                    <a href="#">
                                        <img src="assets/img/product/fashion-colorful/5.jpg" alt="" />
                                    </a>
                                    <span>hot</span>
                                    <div className="product-action">
                                        <a className="animate-left" title="Wishlist" href="#">
                                            <i className="pe-7s-like"></i>
                                        </a>
                                        <a className="animate-top" title="Add To Cart" href="#">
                                            <i className="pe-7s-cart"></i>
                                        </a>
                                        <a className="animate-right" title="Quick View" data-toggle="modal" data-target="#exampleModal" href="#">
                                            <i className="pe-7s-look"></i>
                                        </a>
                                    </div>
                                </div>
                                <div className="product-content">
                                    <h4><a href="#">Arifo Stylas Dress</a></h4>
                                    <span>$115.00</span>
                                </div>
                            </div>
                            <div className="product-wrapper">
                                <div className="product-img">
                                    <a href="#">
                                        <img src="assets/img/product/fashion-colorful/1.jpg" alt="" />
                                    </a>
                                    <div className="product-action">
                                        <a className="animate-left" title="Wishlist" href="#">
                                            <i className="pe-7s-like"></i>
                                        </a>
                                        <a className="animate-top" title="Add To Cart" href="#">
                                            <i className="pe-7s-cart"></i>
                                        </a>
                                        <a className="animate-right" title="Quick View" data-toggle="modal" data-target="#exampleModal" href="#">
                                            <i className="pe-7s-look"></i>
                                        </a>
                                    </div>
                                </div>
                                <div className="product-content">
                                    <h4><a href="#">Arifo Stylas Dress</a></h4>
                                    <span>$115.00</span>
                                </div>
                            </div>
                            <div className="product-wrapper">
                                <div className="product-img">
                                    <a href="#">
                                        <img src="assets/img/product/fashion-colorful/2.jpg" alt="" />
                                    </a>
                                    <span>hot</span>
                                    <div className="product-action">
                                        <a className="animate-left" title="Wishlist" href="#">
                                            <i className="pe-7s-like"></i>
                                        </a>
                                        <a className="animate-top" title="Add To Cart" href="#">
                                            <i className="pe-7s-cart"></i>
                                        </a>
                                        <a className="animate-right" title="Quick View" data-toggle="modal" data-target="#exampleModal" href="#">
                                            <i className="pe-7s-look"></i>
                                        </a>
                                    </div>
                                </div>
                                <div className="product-content">
                                    <h4><a href="#">Arifo Stylas Dress</a></h4>
                                    <span>$115.00</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- product area end --> */}
    
            </div>
        )

    }
    
}


export default ProductDetail;