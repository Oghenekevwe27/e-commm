import img from './facebook.png';
import img2 from './Group 19.png';
import img3 from './Paypal.png';
import img4 from './twitter.png';
import img5 from './Western-union.png';
import Pictures from './Black and Yellow Cart Retail Logo (3).png';


console.log(img, img2, img3, img4, img5, Pictures)


const Footer = () => {
    return (
        <div className="footer">
            <div className="firstsection ">
                <div className="otu">
                    <h2 className="e-comm footerlogo"><img src={Pictures} className="logo" /><pre><span>Creek Mart</span></pre></h2>
                    <p className="forspace">Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem ipsum has been the industry's standard dummy text ever. Since the 1500's when an unknown printer.</p>
                </div>
                <div className="abuo">
                    <h2>Follow Us</h2>
                    <p className="forspace">Since the 1500's when an unknown printer took a galley of type and scrambled.</p>
                    <div className="logo1">
                        <img src={img} className="facebooklogo" />
                        <img src={img4} alt="" />
                    </div>
                </div>
                <div className="abuo contus">
                    <h2>Contact Us</h2>
                    <p className="forspace">Creek mart, 4578 <br />Marmora Road <br /> Glasgow D04 89GR</p>
                </div>
            </div>
            <div className="secondsection">
            <div className="abuo">
                    <h2>Information</h2>
                    <p className="forspace">About Us</p>
                    <p>Information</p>
                    <p>Privacy Policy</p>
                    <p>Terms & Conditions</p>
                </div>
                <div className="abuo">
                    <h2>Services</h2>
                    <p className="forspace">About Us</p>
                    <p>Information</p>
                    <p>Privacy Policy</p>
                    <p>Terms & Conditions</p>
                </div>
                <div className="abuo">
                    <h2>My Account</h2>
                    <p className="forspace">About Us</p>
                    <p>Information</p>
                    <p>Privacy Policy</p>
                    <p>Terms & Conditions</p>
                </div>
                <div className="abuo">
                    <h2>Our Offers</h2>
                    <p className="forspace">About Us</p>
                    <p>Information</p>
                    <p>Privacy Policy</p>
                    <p>Terms & Conditions</p>
                </div>
            </div>
            <hr />
            <div className="themlogos">
                <img src={img5} className="themlogo" />
                <img src={img3} className="others" />
                <img src={img2} className="others" />
                <img src={img5} className="others" />
            </div>
        </div>
    )
}

export default Footer
