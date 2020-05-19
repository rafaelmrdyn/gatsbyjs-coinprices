import React from "react"
import { Link } from "gatsby"

const Header = () => (
  <nav className="navbar navbar-expand navbar-dark bg-dark mb-4">
    <div className="container">
      <a className="navbar-brand" href="#">Coin Prices</a>
      <div className="collapse navbar-collapse">
        <ul className="navbar-nav ml-auto">
          <li className="nav-item">
            <Link to="/"><a className="nav-link">Home</a></Link>
          </li>
          <li className="nav-item">
            <Link to="/about"><a className="nav-link">About</a></Link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
)

export default Header