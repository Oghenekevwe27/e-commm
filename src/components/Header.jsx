import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { faCaretDown } from "@fortawesome/free-solid-svg-icons";
import { useStateValue } from "./StateProvider";
const element =<FontAwesomeIcon icon={faUser}/>
const cart = <FontAwesomeIcon icon={faShoppingCart}/>
const search = <FontAwesomeIcon icon={faSearch}/>
const arrowdown = <FontAwesomeIcon icon={faCaretDown}/>

export const Header = () => {

    const [{ basket }] = useStateValue();
    return (
      <header className="Header">
        <div className="en">
          <pre>EN {arrowdown}</pre>
        </div>
        <div>
          <pre>USD {arrowdown}</pre>
        </div>
        <div className="login">
          <pre>
            <Link to="/login">{element} My Profile </Link>
          </pre>
        </div>
        <div className="cart">
          <Link to="/items">
            <button type="button" class="btn btn-light position-relative">
              {/* <img
                src="/image/vector.png"
                alt="src"
                className="head-image sec"
              /> */}
              {cart}
              <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger  border border-light rounded-circle">
                {basket?.length}
                <span class="visually-hidden">unread messages</span>
              </span>
            </button>
          </Link>
        </div>
        <div className="signup">
          <Link to="/items">
            <p>Items</p>
          </Link>
        </div>
        <div className="searchPrice">
          <Link to="#">
            <pre>$00.00 {search}</pre>
          </Link>
        </div>
      </header>
    );
}

export default Header