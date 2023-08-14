import {useEffect, useState} from "react";
import '../styles/Cart.css';
import { Link, useOutletContext } from "react-router-dom";

const Cart = (props) => {
    const [cart, setCart, showCart, reverseCart, products] = useOutletContext();
    const [productsToShow, setProductsToShow] = useState();

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
    }, [cart, products])


    function changeQuantity(event) {
        const id = event.target.dataset.id;
        let newCart = [...cart];
        const index = newCart.findIndex(element => element.id === id);
        if(event.target.textContent === "-"){
            newCart[index].value -= 1;
            if(newCart[index].value === 0)
                newCart.splice(index, 1);
            setCart([...newCart]);
        } else {
            newCart[index].value += 1;
            setCart([...newCart]);
        }
    }


    return (
        <div className='cart-modal'>
            <div className="cart">
                <div className="close-button" onClick={reverseCart}>Close</div>
                {productsToShow && productsToShow.map(product => (
                    <div className="cart-item" key={product.id}>
                        <img src={product.image} alt="" className="cart-image"/>
                        <div className="cart-info">
                            <p>{product.title}</p>
                            <div className="quantity">
                                <button onClick={changeQuantity} data-id={product.id}>-</button>
                                {product.value}
                                <button onClick={changeQuantity} data-id={product.id}>+</button>
                                <div>${Math.floor(product.price * product.value)}</div>
                            </div>
                            
                        </div>
                    </div>
                ))}
                {!productsToShow && <div className="cart-item">Nothing here!</div>}
                {productsToShow && <Link to='/checkout'><button className="order-button">Order!</button></Link>}

            </div>
        </div>

    )
}

export default Cart;