import './App.css';
import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { products } from './products';
import { Modal } from "react-bootstrap";

// export default function Display(props) {

  class Display extends React.Component {
    constructor(props) {
      super(props);
      this.state = { products : products}
    }
  
  render () {

     let cart;
     cart = <Carts cartlists={this.state.products.CartList} />;
  
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
   
    const handleShow = (products) => {
      setShow(true);
      setShowImge(products);
    }
    const handleClose = () => setShow(false);

    return (
      <div>
      {props.cartlists.map((cartlist) => (
        <div id="items">
        <h3 tag="a" href="#" className="py-2 w-50">{cartlist.description}</h3>
        <div id="qtd1">
        <img onClick={() => handleShow(products)} src={cartlist.img} alt={cartlist.description}></img>
        <span className="border border-dark">
        {cartlist.quantity}</span> quantity    .     .    .     .
        <button
              type="button"
              onClick={() => props.IncrementItem(cartlist)}
              >-</button>
            <button type="button" onClick={() => props.DecreaseItem(cartlist)}
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

//   return (
//     <div>
//     {props.products.map((CartList) => (
//       <div id="items">
//       <h3 tag="a" href="#" className="py-2 w-50">{CartList.description}</h3>
//       <div id="qtd1">
//       <img src={CartList.img} alt={CartList.description}></img>
//       <span className="border border-dark">
//       {CartList.quantity}</span> quantity    .     .    .     .
//       {/* <button
//             type="button"
//             onClick={() => props.IncrementItem(CartList)}
//             >-</button>
//           <button
//             type="button"
//             onClick={() => props.DecreaseItem(CartList)}
//             >+</button> */}
//       </div>
//       </div>
//     ))}
      
//      </div>
//   );
// } 
// export default function Display(props) {
//     const [show, setShow] = useState(false);
//     const [showImge, setShowImge] = useState({});
//     const handleClose = () => setShow(false);
//     const handleShow = (CartList) => {
//       setShow(true);
//       setShowImge(CartList);
//     }

//     return (
//       <div>
//       {props.products.map((CartList) => (
//         <div id="items">
//         <h3 tag="a" href="#" className="py-2 w-50">{CartList.description}</h3>
//         <div id="qtd1">
//         <img onClick={() => handleShow(CartList)} src={CartList.img} alt={CartList.description}></img>
//         <span className="border border-dark">
//         {CartList.quantity}</span> quantity    .     .    .     .
//         <button
//               type="button"
//               onClick={() => props.IncrementItem(CartList)}
//               >-</button>
//             <button
//               type="button"
//               onClick={() => props.DecreaseItem(CartList)}
//               >+</button>
//         </div>
//         </div>
//       ))}
//         <Modal show={show} onHide={handleClose}>
//           <Modal.Header closeButton>
//             <Modal.Title>{showImge.description}</Modal.Title>
//           </Modal.Header>
//           <Modal.Body>
//             <img src={showImge.img} width="350" alt={showImge.description} className="mx-5"/>
//             <p><span className="text-dark">Ratings: </span>{showImge.ratings}/5</p>
//           </Modal.Body>
//         </Modal>
//        </div>
//     );
// } 





