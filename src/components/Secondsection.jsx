import Icon1 from './Group 13.png';
import Icon2 from './Group 14.png';
import Icon3 from './Group 15.png';
import Image1 from './shoey.png';
import { Link, link } from 'react-router-dom';
import Image2 from './figma-1-logo 1.png';
import Image3 from './kronos-logo-1-1 2.png';
import Image4 from './Nike_logo.png';
import Image5 from './Vector.png';
import Image9 from './star.png';
import Image8 from './star copy 2.png';


console.log(Image1, Icon1, Icon2, Icon3, Image2, Image3, Image4, Image5, Image8, Image9);


const Secondsection = () => {
    return (
        <div className="Collection">
            <div className="bluebg container-fluid">
                <div className="writeups">
                    <h3>Adidas Men Running <br /> Sneakers </h3>
                    <p>Performance and designn. Taken right to the edge.</p>
                    <h6><Link to="/">SHOP NOW</Link></h6>
                </div>
                <div className="shoey">
                    <img src={Image1} alt="cannot display" className="giantshoe" />
                </div>
            </div>
            <div className="whyus">
                <div className="truck">
                    <img src={Icon1} alt="Icon1" className="Icon1" />
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quo rerum, porro quaeraue neque illum ipsam mollitia similiqu.</p>
                </div>
                <div className="refund">
                    <img src={Icon2} alt="" />
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quo rerum, porro quaeraue neque illum ipsam mollitia similiqu.</p>
                </div>
                <div className="support">
                    <img src={Icon3} alt="" />
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quo rerum, porro quaeraue neque illum ipsam mollitia similiqu.</p>
                </div>
            </div>
            <div className="latestnews">
                <h1>LATEST NEWS</h1>
                <div className="somestuff">
                    <div className="nike">
                        <img src={Image4} className="img newslogo good" />
                        <div className="text">
                            <h6>01 Jan 2015</h6>
                            <h4>Fashion Industry</h4>
                            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corporis, reprehenderit?</p>
                        </div>
                    </div>
                    <div className="nike">
                        <img src={Image2} className="img newslogo figma" />
                        <div className="text">
                            <h6>01 Jan 2015</h6>
                            <h4>Fashion Industry</h4>
                            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corporis, reprehenderit?</p>
                        </div>
                    </div>
                    <div className="nike">
                        <img src={Image3} className="img newslogo kronos" />
                        <div className="text lasttext">
                            <h6>01 Jan 2015</h6>
                            <h4>Fashion Industry</h4>
                            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corporis, reprehenderit?</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="latestnews">
                <h1>FEATURED PRODUCTS</h1>
                <div className="somestuff">
                    <div className="nike">
                        <img src={Image5} className="img" />
                        <div className="text">
                            <h5 className="Productname">Blue Swade Nike Sneakers</h5>
                            <div className="stars">
                                <img src={Image9} alt="" />
                                <img src={Image9} alt="" />
                                <img src={Image9} alt="" />
                                <img src={Image9} alt="" />
                                <img src={Image8} alt="" />
                            </div>
                            <div className="pricetag">
                                <p className="pink price">$499</p>
                                <p className="former"> $599</p>
                            </div>
                        </div>
                    </div>
                    <div className="nike">
                        <img src={Image5} className="img" />
                        <div className="text">
                            <h5 className="Productname">Blue Swade Nike Sneakers</h5>
                            <div className="stars">
                                <img src={Image9} alt="" />
                                <img src={Image9} alt="" />
                                <img src={Image9} alt="" />
                                <img src={Image9} alt="" />
                                <img src={Image8} alt="" />
                            </div>
                            <div className="pricetag">
                                <p className="pink price">$499</p>
                                <p className="former"> $599</p>
                            </div>
                        </div>
                    </div>
                    <div className="nike">
                        <img src={Image5} className="img" />
                        <div className="text lasttext">
                            <h5 className="Productname">Blue Swade Nike Sneakers</h5>
                            <div className="stars">
                                <img src={Image9} alt="" />
                                <img src={Image9} alt="" />
                                <img src={Image9} alt="" />
                                <img src={Image9} alt="" />
                                <img src={Image8} alt="" />
                            </div>
                            <div className="pricetag">
                                <p className="pink price">$499</p>
                                <p className="former"> $599</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Secondsection




