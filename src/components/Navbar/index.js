import React, { Component } from "react";
import "./index.css";
import {Link} from "react-router-dom"

const NavConstants = [
  { id: "home", name: "Home" },
  { id: "products", name: "Products" },
  { id: "cart", name: "Cart" },
  { id: "whychoose", name: "Why Choose Us?" }
];

class Navbar extends Component {

  render() {
    return (
      <>
        <nav className="nav-container">
          <Link className="logo-link" to="/"><img
            src="https://static.vecteezy.com/system/resources/previews/007/997/810/original/mango-logo-vector.jpg"
            alt="aambazar"
            className="logo"
          /></Link>
          <ul className="nav-buttons-container">
            {NavConstants.map((each) => (
              <li
                key={each.id} 
              ><Link className="nav-buttons-li" to={each.id === "home" ? "/" : `/${each.id}`}>
                {each.name}</Link>
              </li>
            ))}
            <Link to="/profile" className="profile-logo-link"><li className="nav-buttons-li profile-logo">P</li></Link>
          </ul>
        </nav>
        <hr className="home-horizontal-line" />
      </>
    );
  }
}

export default Navbar;
