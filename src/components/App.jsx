import Header from "./Header.jsx";
import {Outlet} from "react-router-dom";
import {useEffect, useState} from "react";

const App = () => {
    const [cart, setCart] = useState([]);
    const [showCart, setShowCart] = useState(false);
    
    const reverseCart = () => {
        setShowCart(!showCart)
    }

    return (
        <>
            <Header reverseCart={reverseCart} />
            <Outlet context={[cart, setCart, showCart, reverseCart]}/>
        </>
    );
};

export default App;