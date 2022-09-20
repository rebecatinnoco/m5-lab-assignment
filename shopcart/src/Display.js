import './App.css';
import App from './App';
import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { products } from './products';
import { Modal } from "react-bootstrap";
import { faPlusCircle, faMinusCircle } from "@fortawesome/free-solid-svg-icons"; 
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import HandleIncrement from "./Button";

export default function Display (props) {
  const [show, setShow] = useState(false);
  const [showImge, setShowImge] = useState({});
 
  const handleShow = (products) => {
    setShow(true);
    setShowImge(products);
  }
  const handleClose = () => setShow(false);

  return (
    <div>
      {props.products.map((produc) => {
        return (
          <div key={produc.id} id="items" className="border border-1 pt-3">
            <h3 tag="a" href="#" className="mx-5">{produc.description}</h3>
            <div id="qtd1">
            <img onClick={() => handleShow(produc)} src={produc.img} alt={produc.description}></img>
          <button
            className="btn btn-secondary mx-2" 
            onClick={() => props.handleIncrement(produc)}
            > <FontAwesomeIcon icon={faPlusCircle} className="fas fa-lg" />
          </button> 
          <button 
            className="btn btn-secondary mx-2" 
            onClick={() => props.handleDecrease(produc)}
            > <FontAwesomeIcon icon={faMinusCircle} className="fas fa-lg" /> 
          </button>
          <span className="mx-5 p-3 border border-3">
            {produc.quantity}</span> quantity
          </div>
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
        )
      }
      )}
    </div>
);
}
