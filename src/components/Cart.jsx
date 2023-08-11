import {useOutletContext} from "react-router-dom";
import {useEffect, useState} from "react";
import '../styles/Cart.css';

const Cart = () => {
    const [cart, setCart] = useOutletContext();
    const [products, setProducts] = useState(null);

    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
            .then(result=>result.json())
            .then(json=>setProducts(json))
    }, [])

    return (
        <div className="cart">

            {cart.map(cartItem => (
                <div key={cartItem.id} className="cart-item">
                    {products && products.find(product => product.id === +cartItem.id).title}
                    {cartItem.value}
                </div>
            ))}
        </div>
    )
}

export default Cart;