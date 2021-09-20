import React from 'react'
import { Link } from 'react-router-dom';
// import Header from './Header';
// import pictures from './Group525.png';
import pictures from "./Black and Yellow Cart Retail Logo (3).png";
import "../styles/custom.scss";


const Login = () => {
    return (
        <div className="login-page">

            <div className="login-container">
                <img src={pictures} className='logo-image login-image' alt="Logo" />

                <h3 className='intro'>Welcome to Creek Mart</h3>
                <p className='sign-in'>Sign in to continue</p>

                <div className="input-field">
                    <i class="far fa-envelope"></i>
                    <input className='input1' type="email" placeholder="Your Email" /> <br /><br />
                    <i class="fas fa-lock"></i>
                    <input className='input1' type="text" placeholder="Password" /><br /><br />

                    <button className="btn btn2 btn-primary">Sign in</button>

                    <p className='or'>OR</p>
                    <p className='login-option'>Login with Google</p>

                    <p className='login-option'>Login with facebook</p>

                    <Link to='#'>Forgot Password?</Link><br /><br />
                    <div className="quest">
                        <p className='no-account'>Don't have an account?</p>
                        <Link to='/signup'>Register</Link>
                    </div>

                    {/* <img src={google} alt="google image" /> */}
                    {/* <Header /> */}
                </div>
                   
            </div>
            
            

            {/* <div className="login-button">
            <Link to="/login">Login</Link>
            </div> */}
        </div>

    )
}

export default Login;
