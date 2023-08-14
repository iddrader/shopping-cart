import {Link} from "react-router-dom";
import '../styles/Header.css';

const Header = (props) => {
    const reverseCart = props.reverseCart;
    const cart = props.cart;

    return (
        <header>
            <ul className="header-links-list">
                <li><Link to='/' className="header-link">Home</Link></li>
                <li><Link to='products' className="header-link">Products</Link></li>
                <li><div className="header-link" onClick={reverseCart}>Cart - {cart ? cart.reduce((acc, cur) => acc + cur.value, 0) : 0}</div></li>
            </ul>
        </header>
    )
}

export default Header;