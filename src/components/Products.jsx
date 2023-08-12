import {useEffect, useState} from "react";
import ProductCard from "./ProductCard.jsx";
import "../styles/Products.css";
import {useOutletContext, redirect} from "react-router-dom";

const Products = () => {
    const [products, setProducts] = useState(null);
    const [cart, setCart] = useOutletContext();

    function addToCart(event)  {
        const index = cart.findIndex(product => product.id === event.target.dataset.id);
        if (index === -1) {
            setCart([...cart, {
                id: event.target.dataset.id,
                value: 1
            }]);
        }
        else{
            const newCart = cart;
            newCart[index].value += 1;
            setCart(newCart);
        }
        event.target.textContent = "+ 1"
        setTimeout(() => {
            event.target.textContent = 'Add to cart';
        }, 5000)
    }

    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
            .then(result=>result.json())
            .then(json=>setProducts(json))
    }, [])

    return (
        <div className="products-list">
            {products && products.map((product) => (
                <ProductCard key={product.title} product={product} addToCart={addToCart}/>
            ))}
        </div>
    )
}

export default Products;