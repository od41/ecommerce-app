import React from 'react';
import {Route} from 'react-router-dom';
// import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Sidebar from './components/Shop/Sidebar';
import ProductList from './components/Shop/Product/ProductList';
import {Cart} from './views/cart'
import ProductDetail from './views/ProductDetail'
import productList from './products.json';

// elements
import {Tag} from './components/utils/misc'

// redux
import {connect} from 'react-redux';

// actions
import {addTocCart} from './actions';

// import connect from redux
// connect App.js to redux-store
// import actions
// map state to props
// map dispatch to props if necessary
// export default of of redux
// register redux in index.js
// hope it works!


const mapStateToProps = (state) => ({
  // productId: state.addTocCart.productId,
})


class App extends React.Component {

  constructor() {
    super()
    this.state = {
      products: productList
    }
    
  }

// load the Json file as an object with product data
// define the state property for the class
// ssetup redux
// setup middleware
// register components
// 

  render() {
    const {productId} = this.props;
    // console.log(productId)

    return(
      
      <div>
        {/* {console.log('product list:', this.state.products)}; */}
        
        <Header />
        <Route exact path="/">
          <div className="shop-page-wrapper shop-page-padding ptb-100">
            <div className="container-fluid">
              <div className="row">
         
                  <Sidebar />
                  <ProductList />

              </div>
            </div>
          </div>
        </Route>

        <Route exact path="/cart">
          <Cart />
        </Route>

        <Route path={"/product-details"} component={ProductDetail} randomProp="test and see" />

      </div>
    )
  }
  
  
  
}

export default connect(mapStateToProps)(App);
