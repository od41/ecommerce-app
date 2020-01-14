import React from 'react';

import Product from './Product';

class ProductList extends React.Component {
    render() {
        return (

            <div className="col-lg-9">
                        <div className="shop-product-wrapper res-xl">
                            <div className="shop-bar-area">
                                <div className="shop-bar pb-60">
                                    <div className="shop-found-selector">
                                        <div className="shop-found">
                                            <p><span>23</span> Product Found of <span>50</span></p>
                                        </div>
                                        <div className="shop-selector">
                                            <label>Sort By : </label>
                                            <select name="select">
                                                <option value="">Default</option>
                                                <option value="">A to Z</option>
                                                <option value=""> Z to A</option>
                                                <option value="">In stock</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className="shop-filter-tab">
                                        <div className="shop-tab nav" role="tablist">
                                            <a className="active" href="#dummy-linkgrid-sidebar3" data-toggle="tab" role="tab" aria-selected="false">
                                                <i className="ti-layout-grid4-alt"></i>
                                            </a>
                                            <a href="#dummy-linkgrid-sidebar4" data-toggle="tab" role="tab" aria-selected="true">
                                                <i className="ti-menu"></i>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <div className="shop-product-content tab-content">
                                    <div id="grid-sidebar3" className="tab-pane fade active show">
                                        <div className="row">
                                            
                                            <div className="col-md-6 col-xl-4">
                                                <Product />
                                            </div>

                                            <div className="col-md-6 col-xl-4">
                                                <Product />
                                            </div>

                                            <div className="col-md-6 col-xl-4">
                                                <Product />
                                            </div>

                                            <div className="col-md-6 col-xl-4">
                                                <Product />
                                            </div>

                                            <div className="col-md-6 col-xl-4">
                                                <Product />
                                            </div>

                                            <div className="col-md-6 col-xl-4">
                                                <Product />
                                            </div>
                                        </div>
                                    </div>
                                    
                                </div>
                            </div>
                        </div>
                        <div className="pagination-style mt-50 text-center">
                            <ul>
                                <li><a href="#dummy-link"><i className="ti-angle-left"></i></a></li>
                                <li><a href="#dummy-link">1</a></li>
                                <li><a href="#dummy-link">2</a></li>
                                <li><a href="#dummy-link">...</a></li>
                                <li><a href="#dummy-link">19</a></li>
                                <li className="active"><a href="#dummy-link"><i className="ti-angle-right"></i></a></li>
                            </ul>
                        </div>
                    </div>
// working code below
        )
    }
}

export default ProductList;