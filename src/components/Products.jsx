import {useEffect, useState} from "react";
import ProductCard from "./ProductCard.jsx";
import "../styles/Products.css";
import {useOutletContext} from "react-router-dom";
import Cart from './Cart.jsx';

const Products = () => {
    const [cart, setCart, showCart, reverseCart, products] = useOutletContext();

    function addToCart(event)  {
        const index = cart.findIndex(product => product.id === event.target.dataset.id);
        if (index === -1) {
            setCart([...cart, {
                id: event.target.dataset.id,
                value: 1
            }]);
        }
        else{
            const newCart = [...cart];
            newCart[index].value += 1;
            setCart([...newCart]);
        }
        event.target.textContent = "+ 1"
        setTimeout(() => {
            event.target.textContent = 'Add to cart';
        }, 5000)
    }

    return (
        <div className="products-list">
            {products && products.map((product) => (
                <ProductCard 
                    key={product.title} 
                    product={product} 
                    addToCart={addToCart}
                />
            ))}
            { showCart && 
                <Cart 
                    reverseCart={reverseCart}
                    products={products}
                /> }
        </div>
    )
}

export default Products;