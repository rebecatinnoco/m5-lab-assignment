import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Display  from './Display';
import Cart  from './Cart';
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons"; 
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const element = <FontAwesomeIcon icon={faShoppingCart} />

//  export default function Nav (props) {
//     return (
//       <Router>
//             <nav>
//               <Link className="App" to="/">
//               <div className="d-flex bg-info">

//               </div>
//               </Link>
//               <Link to="/Cart"></Link>
//             </nav>
//         <Routes>
//           <Route path="/" element={<Display />} />
//           <Route path="/showcart" element={ <Cart />}  />
//         </Routes>
//       </Router>

//     )
// }


export default function Nav (props) {
  return (
    <Router>
          <nav>
            <Link className="App" to="/">
            <div className="d-flex bg-info">
            <h1>Shop to React</h1>
            <p className="total">{element} {".      ."} </p>
            </div>
            </Link>
            <Link to="/Cart"></Link>
          </nav>
      <Routes>
        <Route path="/" element={<Display 
              products={props.cart}
              IncrementItem={props.IncrementItem}
              DecreaseItem={props.DecreaseItem}/>} />
        <Route path="/showcart" element={ <Cart 
              products={props.cart}
              IncrementItem={props.ItemCount}/>}  />
      </Routes>
    </Router>

  )
}