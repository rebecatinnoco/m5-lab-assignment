import './App.css';
import { products } from './products';
import Nav  from './Nav';
import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
// import { faShoppingCart } from "@fortawesome/free-solid-svg-icons"; 
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// const  = <FontAwesomeIcon icon={faShoppingCart} />

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { products : products,}
  }

  IncrementItem = (addQty) => {
    if(addQty.quantity < 9) {
          const updateQty = addQty.quantity++;
          this.setState({updateQty});
        }
    }
  DecreaseItem = (minusQty) => {
    if(minusQty.quantity > 0) {
          const updateQty = minusQty.quantity--;
          this.setState({updateQty});
        }
    }

render () {

  return (
      <div className="App">
        <Nav ItemCount={this.state.products}
              cart={this.state.products}
              IncrementItem={this.IncrementItem}
              DecreaseItem={this.DecreaseItem} />
      </div>
  );
}
}

export default App;


{/* <Nav ItemCount={this.state.products
            .map((cart) => cart.quantity)
            .reduce((acc, curr) => acc + curr, 0)}
              cart={this.state.products}
              IncrementItem={this.IncrementItem}
              DecreaseItem={this.DecreaseItem} /> */}

