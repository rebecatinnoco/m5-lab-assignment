import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

export default function Cart(props) {
    return (
        <div>
            <ShowCart 
            products={props.products}
            NumItem={props.NumItem}
            />
        </div>
    );
}

function ShowCart(props) {
    return (
        <div className="w-150">
            <h2>Your Cart Items</h2>
            {/* {props.products.map((products) =>  (
                    <div key={products.id} className="border">
                        <img src={products.img} alt={products.description} width="150"></img>
                        <p className="qty d-inline mx-5 fw-bold">Quantity {products.quantity}</p>
                        <p className="px-4">{products.description}</p>
                    </div>
                   )

            )} */}
        </div>
    )
}