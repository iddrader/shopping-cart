import Header from "./Header.jsx";
import {Outlet} from "react-router-dom";
import {useState, useEffect} from "react";

const App = () => {
    const [showCart, setShowCart] = useState(false);
    const [cart, setCart] = useState([]);
    const [products, setProducts] = useState(null)

    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
            .then(result=>result.json())
            .then(json=>setProducts(json))
    }, [])
    
    const reverseCart = () => {
        const newState = !showCart;
        setShowCart(newState);
    }

    return (
        <>
            <Header reverseCart={reverseCart} cart={cart} />
            <Outlet context={[cart, setCart, showCart, reverseCart, products]}/>
        </>
    );
};

export default App;