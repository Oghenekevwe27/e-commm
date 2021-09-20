// import React from 'react';
import { Link } from 'react-router-dom';
// import Pictures from './Group525.png';
import Pictures  from "./Black and Yellow Cart Retail Logo (3).png"
console.log(Pictures)

const Navbar = () => {
    return (
      //   <nav className="navbar container">

      //     <ul className="nav">
      //       <li className="nav-item">
      //         <Link to="/" className="nav-link nav-words active" id="home">
      //           HOME{" "}
      //         </Link>
      //       </li>
      //       <li className="nav-item">
      //         <Link to="/" className="nav-link nav-words">
      //           BAGS
      //         </Link>
      //       </li>
      //       <li className="nav-item">
      //         <Link to="/" className="nav-link nav-words">
      //           SNEAKERS
      //         </Link>
      //       </li>
      //       <li className="nav-item">
      //         <Link to="/" className="nav-link nav-words">
      //           BELT
      //         </Link>
      //       </li>
      //       <li className="nav-item">
      //         <Link to="/" className="nav-link nav-words">
      //           CONTACT
      //         </Link>
      //       </li>
      //     </ul>
      //   </nav>
      <div className="Navbar">
        <Link>
          {" "}
          <p className="e-comm">
            <img src={Pictures} className="logo" />
            {/* <pre>
              <span> E-Comm</span>
            </pre> */}
          </p>
        </Link>
        <Link to="/" className="lba">
          {" "}
          <li className="home">HOME</li>
        </Link>
        <Link to="#" className="lba">
          {" "}
          <li>ABOUT</li>
        </Link>
        <Link to="#" className="lba">
          {" "}
          <li>BAGS</li>
        </Link>
        <Link to="#" className="lba">
          {" "}
          <li>SNEAKERS</li>
        </Link>
        <Link to="#" className="lba">
          {" "}
          <li>BELTS</li>
        </Link>
        <Link to="/contact" className="lba">
          {" "}
          <li className="contact">CONTACT</li>
        </Link>
      </div>
    );
}

export default Navbar
