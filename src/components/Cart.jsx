import {useOutletContext} from "react-router-dom";
import {useEffect, useState} from "react";
import '../styles/Cart.css';

const Cart = () => {
    const [cart, setCart] = useOutletContext();
    const [products, setProducts] = useState(null);
    const [productsToShow, setProductsToShow] = useState();

    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
            .then(result=>result.json())
            .then(json=>setProducts(json))
    }, [])

    useEffect(() => {
        if(cart.length === 0 || products === null){
            setProductsToShow(null);
            return;
        }
        setProductsToShow(cart.map(cartItem => {
            const product = products.find(product => product.id === +cartItem.id);
            product.value = cartItem.value;
            return product;
        }))
    }, [products, cart])

    function decrease(event) {
        const id = event.target.dataset.id;
        let newCart = [...cart];
        const index = newCart.findIndex(element => element.id === id);
        newCart[index].value -= 1;
        if(newCart[index].value === 0)
            newCart.splice(index, 1);
        setCart([...newCart]);
    }

    function increase(event) {
        const id = event.target.dataset.id;
        const newCart = cart;
        const index = newCart.findIndex(element => element.id === id);
        newCart[index].value += 1;
        setCart([...newCart]);
    }


    return (
        <div className="cart">
            {productsToShow && productsToShow.map(product => (
                <div className="cart-item" key={product.id}>
                    <img src={product.image} alt="" className="cart-image"/>
                    <div className="cart-info">
                        <p>{product.title}</p>
                        <div className="quantity">
                            <button onClick={decrease} data-id={product.id}>-</button>
                            {product.value}
                            <button onClick={increase} data-id={product.id}>+</button>
                        </div>
                    </div>


                </div>
            ))}

            {!productsToShow && <div className="cart-item">Nothing here!</div>}
        </div>
    )
}

export default Cart;