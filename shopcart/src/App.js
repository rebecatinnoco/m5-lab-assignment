import './App.css';
import { products } from './products';
import Display  from './Display';
import Nav  from './Nav';
import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons"; 
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const element = <FontAwesomeIcon icon={faShoppingCart} />

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { productList : products}
  }

render () {

  return (
    {},
    (
      <div className="App">
        <Nav />
        <Display />
      </div>
    )
  );
}
}

export default App;
export function add(){};



// import './App.css';
// import React, { Component } from "react";
// import "bootstrap/dist/css/bootstrap.min.css";
// import { faShoppingCart } from "@fortawesome/free-solid-svg-icons"; 
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { Products } from "./Products";
// import Navbar from "./Navbar";


// const element = <FontAwesomeIcon icon={faShoppingCart} />


// class App extends Component {
//   constructor(props) {
//     super(props);
//     this.state = { ProductList: Products }
//   }

// render () {

//   return (
//     {},
//     (
//       <div className="App">
//           <div className="App">
//         <Navbar />
//         <displayProducts />
//       </div>
//         </div>
//     )
//   );
// }
// }
// export default App;


