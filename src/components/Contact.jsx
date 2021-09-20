import React from 'react'
// import Headimage from './Headimage';
// import Tablets from './Tablets';
// import Pictures from "./Group525.png";
import { Link } from 'react-router-dom';
import Footer from './Footer';
import Picture from "./call.png";


const Contact = () => {
    return (
        <div className='all'>
<div className="headies"><p><Link to='/'>Home</Link> Contact Us</p></div>
            <br /><br />
<div className="float-container">
         <div className="float-child">
<div className="conti ">
            <img className='call' src={Picture} alt="" />
            
            <div className='inner-conti'>
            <h1 > get in <br />
                touch</h1> <br /><br /><br />
            <p>contact@e-comm.ng <br />  <br />+2344556666534 <br /> <br /> 20 Prince Hakerem Lekki <br /> <br /> Phase 1, Lagos. </p>
</div>
</div>

<div className="float-child2">
               <form>
                <label >Full Name</label> <br />
                <input className='conus' placeholder='James Doe' type="text" /> <br /> <br />
                <label >Email</label> <br />
                <input className='conus' placeholder='jamesdoe@gmail' type="email" /> <br /> <br />
                <label >Message</label> <br />
                <textarea className="conus" placeholder='Type your message'cols="30" rows="10"></textarea> <br /> <br />
<div className="btn btn3 btn">Submit
</div>
                </form>

</div>
</div> 
</div> 
<br /> <br />
         <div className="mimi d-flex">
        <input placeholder='Search query.....'type="text" className=" src rounded-0" />
        <button  className=" btn btn3 rounded-0">Search</button>
         </div>
         <br /><br />



 
           <Footer />
        </div>
    )
}
export default Contact;