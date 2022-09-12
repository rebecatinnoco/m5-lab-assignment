import './App.css';
import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { products } from './products';
import { add } from './App';
import {useState } from "react";
import { Modal } from "react-bootstrap";


class Display extends React.Component {
    constructor(props) {
      super(props);
      this.state = { productList : products}
    }
  
  render () {

     let cart;
     cart = <Carts cartlists={this.state.productList.CartList} />;
  
    return (
      {},
      (
        <div>
          {cart}
        </div>
      )
    );
  }
  }

  function Carts(props) {
    const [show, setShow] = useState(false);
    const [showImge, setShowImge] = useState({});
    const handleClose = () => setShow(false);
    const handleShow = (products) => {
      setShow(true);
      setShowImge(products);
    }

    return (
      <div>
      {props.cartlists.map((cartlist) => (
        <div id="items">
        <h3 tag="a" href="#" className="py-2 w-50">{cartlist.description}</h3>
        <div id="qtd1">
        <img onClick={() => handleShow(products)} src={cartlist.img}></img>
        <span className="border border-dark">
        {cartlist.quantity}</span> quantity    .     .    .     .
        <button
              type="button"
              // onClick={this.remove}
              >-</button>
            <button
              type="button"
              onClick={ add }
              >+</button>
        </div>
        </div>
      ))}
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>{showImge.description}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <img src={showImge.img} width="350" alt={showImge.description} className="mx-5"/>
            <p><span className="text-dark">Ratings: </span>{showImge.ratings}/5</p>
          </Modal.Body>
        </Modal>
       </div>
    );
} 

export default Display;













// import React, { Component } from "react";
// import "bootstrap/dist/css/bootstrap.min.css";
// import { faShoppingCart } from "@fortawesome/free-solid-svg-icons"; 
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { Products } from "./Products";
// import './App.css';

// const element = <FontAwesomeIcon icon={faShoppingCart} />
// class displayProducts extends Component {
//     constructor(props) {
//       super(props);
//       this.state = { ProductList: Products }
//     }
  
//     // handleAddQuant = () => {
//     //   if(this.state.ProductList.CartList.quantity > 9) {
  
//     //   }else {
//     //       this.setState({
//     //           quantity: this.state.ProductList.CartList.quantity + 1 
//     //       });
//     //   }
//     // }
//     // ToggleClick = () => {
//     //   this.setState({ show: !this.state.show });
//     // }
  
//     // UpdateValue = (e) => {
  
//     //   this.setState({ ProductList: e.target.value });
//     // }
  
//   render () {
//     let cart;
//     let todo;
//     cart = <Carts cartlists={this.state.ProductList.CartList} />;
//     todo = <Todos todolists={this.state.ProductList.CartList} />;
 
//     return (
//       {},
//       (
//         <div className="App">
//           <div className="d-flex bg-info">
//           <h1 className="text-white">Shop 2 React</h1>
//           <p className="total text-white">{element} {".      ."} {todo}</p>
//           </div>
//           {cart}
//         </div>
//       )
//     );
//   }
//   }
//   function Todos(props) {
//     let t = 0; 
//     t = props.todolists.map(todolists => todolists.quantity).reduce((prev, next) => prev + next);
    
//     return (
//       <div>
//       <div id="total">{t} items </div>
  
//        </div>
//     )
//   }
  
//   function Carts(props) {
//     return (
//       <div>
//       {props.cartlists.map((cartlist) => (
//         <div id="items">
//         <h3 tag="a" href="#" className="py-2 w-50">{cartlist.description}</h3>
//         <div id="qtd1">
//         <img src={cartlist.img}></img>
//         {/* <AddQuantity  /> */}
//         <span className="border border-dark">
//         {cartlist.quantity}</span> quantity
//         </div>
//         </div>
//       ))}
//        </div>
//     );
//   }
  
// //   function AddQuantity () {
// //     // let qty;
// //     // qty = <AddQuantity addquant={this.state.ProductList.CartList.quantity} />;
// //     const increase = () => {
      
// //     }
// //     return (
// //       <div>
// //         <button onClick={increase}>+</button>
// //         <button>-</button>
// //       </div>
// //     )
// //   }
  
//   export default displayProducts;
  