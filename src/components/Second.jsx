import React from 'react'
import { Link } from 'react-router-dom'
import "../styles/second.scss"

const Second = () => {
  return (
    <div className="wrappser">
        <div className="wrapss">
        <h1>BEST SELLER</h1>

        <nav className="navbar-container">
      
        <div className="nav-links">
        <Link to="/"  className="navbar-home lb">All  </Link>
        <Link to="/bag"  className="navbar-bag lb">Bags </Link>
        <Link to="/snaeakers"  className="navbar-sneakers lb">Sneakers</Link>
        <Link to="/belt"  className="navbar-sneakers lb">Belt </Link>
        <Link to="/contact"  className="navbar-CONTACT ls">Sunglasses</Link>
                
        </div>
      </nav>
      </div>
      
    </div>
  )
}

export default Second
