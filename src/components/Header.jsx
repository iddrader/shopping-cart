import {Link} from "react-router-dom";
import '../styles/Header.css';

const Header = () => {
    return (
        <header>
            <ul className="header-links-list">
                <li><Link to='/' className="header-link">Home</Link></li>
                <li><Link to='products' className="header-link">Products</Link></li>
                <li><Link to='cart' className="header-link">Cart</Link></li>
            </ul>
        </header>
    )
}

export default Header;