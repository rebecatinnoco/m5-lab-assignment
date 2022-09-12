import './App.css';
import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { products } from './products';
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons"; 
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const element = <FontAwesomeIcon icon={faShoppingCart} />


class Nav extends Component {
    constructor(props) {
      super(props);
      this.state = { productList : products}
    }

    render () {

        let todo;
        todo = <Todos todolists={this.state.productList.CartList} />;
      
        return (
          {},
          (
            <div className="App">
              <div className="d-flex bg-info">
              <h1>Shop to React</h1>
              <p className="total">{element} {".      ."} {todo}</p>
              </div>
            </div>
          )
        );
      }
}
  
function add() {
    
    return (
      <div>
      //alert(props.state);
      <p>asd</p>
      </div>
    )
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
  
  export default Nav;



// import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import './App.css';
// import React, { Component } from "react";
// import "bootstrap/dist/css/bootstrap.min.css";
// import { Products } from './products';
// import { faShoppingCart } from "@fortawesome/free-solid-svg-icons"; 


// const element = <FontAwesomeIcon icon={faShoppingCart} />

// class Navbar extends Component {
//     constructor(props) {
//       super(props);
//       this.state = { ProductList : Products}
//     }

//     render () {

//         let todo;
//         todo = <Todos todolists={this.state.ProductList.CartList} />;
      
//         return (
//           {},
//           (
//             <div className="App">
//               <div className="d-flex bg-info">
//               <h1>Shop to React</h1>
//               <p className="total">{element} {".      ."} {todo}</p>
//               </div>
//             </div>
//           )
//         );
//       }
// }
  
// function add() {
    
//     return (
//       <div>
//       //alert(props.state);
//       <p>asd</p>
//       </div>
//     )
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
  
//   export default Navbar;

//   function Nav(props) {
//     return (
//         <div>
//             <Router>
//                 {/* <ul className="nav mx-2 mb-4">
//                 <li>
//                      <Link to="/"></Link>
//                 </li>
//                 <li>
//                     <Link to="/cart"></Link>
//                 </li>
//                 </ul> */}

//         <Routes>
//           <Route path="/" element={<displayProducts />} />
//           {/* <Route path="/cart" element={ <AllTodos />}  /> */}
//         </Routes>
//       </Router>
//     </div>
//     )
// }