import { useEffect, useState } from "react";
import { useOutletContext } from "react-router-dom"
import '../styles/Checkout.css';

const Checkout = () => {
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

    const totalPrice = productsToShow ? Math.floor(productsToShow.reduce((acc, cur) => acc + cur.price * cur.value, 0)) : 0;

    const changeQuantity = (event) => {
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
        <div className="checkout-body">
            <div className="checkout-items">
                { productsToShow && productsToShow.map((item) => (
                    <div key={item.id} className="checkout-item">
                        <img src={item.image} alt="" />
                        <div className="checkout-description">
                            <div className="checkout-item-title">
                                {item.title}
                            </div>
                            <div className="checkout-item-price">
                                ${item.price}
                            </div>
                            <div className="quantity">
                                <button onClick={changeQuantity} data-id={item.id}>-</button>
                                    {item.value}
                                <button onClick={changeQuantity} data-id={item.id}>+</button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <div className="checkout-total">
                <div><strong>Subtotal: </strong>${productsToShow && totalPrice}</div>
                <div><strong>Shipping: </strong>$8</div>
                <div><strong>Tax: </strong>${Math.floor(totalPrice * 0.05)}</div>
                <br />
                <br />
                <div><strong>Shipping information:</strong></div>
                <form action="">
                    <label htmlFor="country">
                        Country
                        <input type="text" />
                    </label>
                    <label htmlFor="city">
                        City
                        <input type="text" />
                    </label>
                    <label htmlFor="Street">
                        Street
                        <input type="text" />
                    </label>
                    <label htmlFor="house">
                        House
                        <input type="number" />
                    </label>
                    <button type="submit">Order!</button>
                </form>
            </div>
        </div>
    )
}

export default Checkout;