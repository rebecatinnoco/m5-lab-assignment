import './App.css';
import { products } from './products';
import Nav  from './Nav';
import Display from "./Display"
import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";


// const  = <FontAwesomeIcon icon={faShoppingCart} />

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { products: [
      {
        id: 1,
        description: "Unisex Cologne",
        ratings: "3.5",
        quantity: 0,
        img: "/products/cologne.jpg",
        done: false
      },
      { id: 2, 
        description: "Apple Watch", 
        ratings: "3.5",
        quantity: 0, 
        img: "/products/iwatch.jpg",
        done: false },
      {
        id: 3,
        description: "Unique Mug",
        ratings: "3.5",
        quantity: 0,
        img: "/products/mug.jpg",
        done: false
      },
      {
        id: 4,
        description: "Mens Wallet",
        ratings: "3.5",
        quantity: 0,
        img: "/products/wallet.jpg",
        done: false
      }
    ]}
  }

  handleIncrement = (addQty) => {
    if(addQty.quantity < 5) {
          const updateQty = addQty.quantity++;
          this.setState({updateQty});
        }
    };

  handleDecrease = (minusQty) => {
    if(minusQty.quantity > 0) {
          const updateQty = minusQty.quantity--;
          this.setState({updateQty});
        }
    }

render () {

  return (
      <div className="App">
        <Nav 
          products={this.state.products}
          NumItem={this.props.NumItem}
          handleIncrement={this.handleIncrement}
          handleDecrease={this.handleDecrease} />
        {/* <Display 
          products = {this.state.products}
          handleIncrement = {this.handleIncrement}
          DeacreaseItem = {this.handleDecrease}
          
        /> */}
      </div>
  );
}
}



export default App;



