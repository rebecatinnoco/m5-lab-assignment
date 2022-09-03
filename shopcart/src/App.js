
import './App.css';
import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons"; 
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const element = <FontAwesomeIcon icon={faShoppingCart} />


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      CartList: [
        {
          id: 1,
          description: "Unisex Cologne",
          quantity: 0,
          img: "/products/cologne.jpg",
          done: false
        },
        { id: 1, 
          description: "Apple Watch", 
          quantity: 0, 
          img: "/products/iwatch.jpg",
          done: false },
        {
          id: 1,
          description: "Unique Mug",
          quantity: 0,
          img: "/products/mug.jpg",
          done: false
        },
        {
          id: 1,
          description: "Mens Wallet",
          quantity: 0,
          img: "/products/wallet.jpg",
          done: false
        }
      ],
    }
  }


render () {
  let cart;
  let todo;
  cart = <Carts cartlists={this.state.CartList} />;

  todo = <Todos todolists={this.state.CartList} />;

  return (
    {},
    (
      <div className="App">
        <div className="d-flex bg-info">
        <h1>Shop to React</h1>
        <p className="total">{element} {".      ."} {todo}</p>
        </div>
        
        
        {cart}
      </div>
    )
  );
}
}
function Todos(props) {
  let t = 0;

  t = props.todolists.map(todolists => todolists.quantity).reduce((prev, next) => prev + next);
  
  return (
    <div>
    <div id="total">{t} items </div>

     </div>
  )
}

function Carts(props) {
  return (
    <div>
    {props.cartlists.map((cartlist) => (
      <div id="items">
      <h3 tag="a" href="#" className="py-2 w-50">{cartlist.description}</h3>
      <div id="qtd1">
      <img src={cartlist.img}></img>
      <span className="border border-dark">
      {cartlist.quantity}</span> quantity
      </div>
      </div>
    ))}
     </div>
  );
}

export default App;
