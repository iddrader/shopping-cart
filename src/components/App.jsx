import Header from "./Header.jsx";
import {Outlet} from "react-router-dom";
import {useState} from "react";

const App = () => {
    const [showCart, setShowCart] = useState(false);
    const [cart, setCart] = useState([]);
    
    const reverseCart = () => {
        const newState = !showCart;
        setShowCart(newState);
        console.log(1)
    }

    return (
        <>
            <Header reverseCart={reverseCart} cart={cart} />
            <Outlet context={[cart, setCart, showCart, reverseCart]}/>
        </>
    );
};

export default App;