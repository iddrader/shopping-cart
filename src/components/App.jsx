import Header from "./Header.jsx";
import {Outlet} from "react-router-dom";
import {useState} from "react";

const App = () => {
    const [showCart, setShowCart] = useState(false);
    
    const reverseCart = () => {
        const newState = !showCart;
        setShowCart(newState);
    }

    return (
        <>
            <Header reverseCart={reverseCart} />
            <Outlet context={[showCart, reverseCart]}/>
        </>
    );
};

export default App;