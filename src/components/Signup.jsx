import React from 'react';
// import pictures from './Group525.png';
import { Link } from 'react-router-dom';
// import Header from './Header';
// import Headimage from './Headimage';
// import Tablets from './Tablets';

const Signup = () => {
    return (
      <div className="login-page">
        <div className="login-container">
          <img
            src="../Black and Yellow Cart Retail Logo (3).png"
            className="logo-image"
            alt="Logo"
          />

          <h3 className="intro">Let's get started</h3>
          <p className="sign-in">Create an account</p>

          <div className="input-field">
            <i class="far fa-user"></i>
            <input
              className="input1"
              type="text"
              placeholder="First Name"
            />{" "}
            <br />
            <br />
            <i class="far fa-user"></i>
            <input
              className="input1"
              type="text"
              placeholder="Last Name"
            />{" "}
            <br />
            <br />
            <i class="far fa-envelope"></i>
            <input
              className="input1"
              type="email"
              placeholder="Your Email"
            />{" "}
            <br />
            <br />
            <i class="fas fa-lock"></i>
            <input className="input1" type="text" placeholder="Password" />
            <br />
            <br />
            <i class="fas fa-lock"></i>
            <input
              className="input1"
              type="text"
              placeholder="Password Again"
            />
            <br />
            <br />
            <button className="btn btn-primary">Sign up</button>
            <div className="quest">
              <p className="no-account">Have an account?</p>
              <Link to="/login">Sign in</Link>
            </div>
            {/* <img src={google} alt="google image" /> */}
            {/* <Header /> */}
          </div>
        </div>

        {/* <div className="login-button">
            <Link to="/login">Login</Link>
            </div> */}
      </div>
    );
}

export default Signup;
