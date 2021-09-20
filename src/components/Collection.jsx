import { Link } from "react-router-dom";
import Image1 from "./image Product (1).png";
import Image2 from "./image Product.png";
import Image3 from "./image Product (2).png";
import Image4 from "./image Product (3).png";
import Image5 from "./Product Picture02.png";
import Image6 from "./Product Picture03.png";
import Image7 from "./Product Picture01.png";
import Image8 from "./star copy 2.png";
import Image9 from "./star.png";
import Image10 from "./label.png";
import Image11 from "./overlay.png";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";

const Cart = <FontAwesomeIcon icon={faShoppingCart} />;
const heart = <FontAwesomeIcon icon={faHeart} />;
console.log(
  Image1,
  Image2,
  Image3,
  Image4,
  Image5,
  Image6,
  Image7,
  Image8,
  Image9,
  Image10,
  Image11
);

const Collection = () => {
  return (
    <div className="Collection">
      <div className="Bigtext">
        <h3>BEST SELLER</h3>
      </div>
      <div className="collection">
        <h4>All</h4>
        <h4>Bags</h4>
        <h4>Sunglasses</h4>
        <h4>Belts</h4>
        <h4>Sneakers</h4>
      </div>
      <Link to="/reviewpage">
        <div className="productcollection">
          <div className="numberOne">
            <img src={Image2} alt="" />
            <img src={Image10} className="hot" />
            <h5 className="Productname">Nike Air Max 270 React</h5>
            <div className="stars">
              <img src={Image9} alt="" />
              <img src={Image9} alt="" />
              <img src={Image9} alt="" />
              <img src={Image9} alt="" />
              <img src={Image8} alt="" />
            </div>
            <div className="pricetag">
              <p className="price">$299.43</p>
              <p className="former"> $534.33</p>
              <div className="off">24% Off</div>
            </div>
            <div className="overlay">
              <img src={Image11} alt="" />
              <div className="overlaylink">
                {heart}
                {Cart}
              </div>
            </div>
          </div>
          <div className="numberOne">
            <img src={Image1} alt="" />
            <h5 className="Productname">Nike Air Max 270 React</h5>
            <div className="stars">
              <img src={Image9} alt="" />
              <img src={Image9} alt="" />
              <img src={Image9} alt="" />
              <img src={Image9} alt="" />
              <img src={Image8} alt="" />
            </div>
            <div className="pricetag">
              <p className="price">$299.43</p>
              <p className="former"> $534.33</p>
              <div className="off">24% Off</div>
            </div>
            <div className="overlay">
              <img src={Image11} alt="" />
              <div className="overlaylink">
                {heart}
                {Cart}
              </div>
            </div>
          </div>
          <div className="numberOne">
            <img src={Image3} alt="" />
            <h5 className="Productname">Nike Air Max 270 React</h5>
            <div className="stars">
              <img src={Image9} alt="" />
              <img src={Image9} alt="" />
              <img src={Image9} alt="" />
              <img src={Image9} alt="" />
              <img src={Image8} alt="" />
            </div>
            <div className="pricetag">
              <p className="price">$299.43</p>
              <p className="former"> $534.33</p>
              <div className="off">24% Off</div>
            </div>
            <div className="overlay">
              <img src={Image11} alt="" />
              <div className="overlaylink">
                {heart}
                {Cart}
              </div>
            </div>
          </div>
          <div className="numberOne">
            <img src={Image4} alt="" />
            <h5 className="Productname">Nike Air Max 270 React</h5>
            <div className="stars">
              <img src={Image9} alt="" />
              <img src={Image9} alt="" />
              <img src={Image9} alt="" />
              <img src={Image9} alt="" />
              <img src={Image8} alt="" />
            </div>
            <div className="pricetag">
              <p className="price">$299.43</p>
              <p className="former"> $534.33</p>
              <div className="off">24% Off</div>
            </div>
            <div className="overlay">
              <img src={Image11} alt="" />
              <div className="overlaylink">
                {heart}
                {Cart}
              </div>
            </div>
          </div>
          <div className="numberOne">
            <img src={Image5} alt="" />
            <h5 className="Productname">Nike Air Max 270 React</h5>
            <div className="stars">
              <img src={Image9} alt="" />
              <img src={Image9} alt="" />
              <img src={Image9} alt="" />
              <img src={Image9} alt="" />
              <img src={Image8} alt="" />
            </div>
            <div className="pricetag">
              <p className="price">$299.43</p>
              <p className="former"> $534.33</p>
              <div className="off">24% Off</div>
            </div>
            <div className="overlay">
              <img src={Image11} alt="" />
              <div className="overlaylink">
                {heart}
                {Cart}
              </div>
            </div>
          </div>
          <div className="numberOne">
            <img src={Image6} alt="" />
            <h5 className="Productname">Nike Air Max 270 React</h5>
            <div className="stars">
              <img src={Image9} alt="" />
              <img src={Image9} alt="" />
              <img src={Image9} alt="" />
              <img src={Image9} alt="" />
              <img src={Image8} alt="" />
            </div>
            <div className="pricetag">
              <p className="price">$299.43</p>
              <p className="former"> $534.33</p>
              <div className="off">24% Off</div>
            </div>
            <div className="overlay">
              <img src={Image11} alt="" />
              <div className="overlaylink">
                {heart}
                {Cart}
              </div>
            </div>
          </div>
          <div className="numberOne">
            <img src={Image7} alt="" />
            <h5 className="Productname">Nike Air Max 270 React</h5>
            <div className="stars">
              <img src={Image9} alt="" />
              <img src={Image9} alt="" />
              <img src={Image9} alt="" />
              <img src={Image9} alt="" />
              <img src={Image8} alt="" />
            </div>
            <div className="pricetag">
              <p className="price">$299.43</p>
              <p className="former"> $534.33</p>
              <div className="off">24% Off</div>
            </div>
            <div className="overlay">
              <img src={Image11} alt="" />
              <div className="overlaylink">
                {heart}
                {Cart}
              </div>
            </div>
          </div>
          <div className="numberOne">
            <img src={Image1} alt="" />
            <h5 className="Productname">Nike Air Max 270 React</h5>
            <div className="stars">
              <img src={Image9} alt="" />
              <img src={Image9} alt="" />
              <img src={Image9} alt="" />
              <img src={Image9} alt="" />
              <img src={Image8} alt="" />
            </div>
            <div className="pricetag">
              <p className="price">$299.43</p>
              <p className="former"> $534.33</p>
              <div className="off">24% Off</div>
            </div>
            <div className="overlay">
              <img src={Image11} alt="" />
              <div className="overlaylink">
                {heart}
                {Cart}
              </div>
            </div>
          </div>
        </div>
      </Link>
      <div className="loadmore">
        <Link to="/">Load More</Link>
      </div>
    </div>
  );
};

export default Collection;
