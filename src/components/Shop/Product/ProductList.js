import React from 'react';

import Product from './Product';
import productDb from '../../../products.json';
import Shopbar from '../Shopbar';


class ProductList extends React.Component {

    constructor() {
        super();
        this.state = {
            productList: '',
        }
    }

    // convert json to object array
    productMap = () => {
        const productArray = new Array(productDb.products).flat();
        console.log("ProductArray: ", productArray)

        let i=0
        const productListTemplate = productArray.map((productItem) => {
            console.log("Product Item.Name: ", productItem.name)
            
            return(
                <Product key={i++} product={productItem} />
            )
            
        })

        // const news = sortedNews.map((newsItem) => {
        //     let i = 0
        //     return(
        //         <NewsItem key={"news-" + i++} newsItem={newsItem} />
        //     )
        // })
        console.log("Product list template: ",productListTemplate)
        return productListTemplate;
    }

    componentDidMount () {
        this.state.productList = this.productMap();
    }
    // loop through array and map elements to particular props
    // pass each particular prop to a product component
    // render product list
    render() {
        return (

            <div className="col-lg-9">
                        <div className="shop-product-wrapper res-xl">
                            <div className="shop-bar-area">
                                <Shopbar />
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
                                   
                                     {this.productMap()}

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