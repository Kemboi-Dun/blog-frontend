import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="nav_container">
      <div className="nav_wrapper">
        <nav>
          <div className="logo">
            <Link className="link"  to="/">
            <h3>Uncover</h3>
            </Link>
            <div className="logo_dot"></div>
          </div>
          <div className="links">
            <Link className="link" to="/?cat=technology">
              <h6>
              Technology
              </h6>
            </Link>
            <Link className="link" to="/?cat=art">
              <h6>Art</h6>
            </Link>
            <Link className="link" to="/?cat=music">
              <h6>Music</h6>
            </Link>
            <Link className="link" to="/?cat=food">
              <h6>Food</h6>
            </Link>
            <div className="write">
              <Link className="link" to="/write">
                Write
              </Link>
            </div>
            <span>
              <p>John</p>
              <Link className="link" to="/">
                Logout
              </Link>
            </span>
          
          </div>
        </nav>
      </div>
    </div>
  );
}

export default Navbar;
