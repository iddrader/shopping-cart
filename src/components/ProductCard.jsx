import {useState} from 'react';
import InfoModal from './InfoModal.jsx';

const ProductCard = (props) => {
    const product = props.product;
    const addToCart = props.addToCart;
    const [modalActive, setModalActive] = useState(false);

    const modalSwitch = () => {
        setModalActive(!modalActive);
    }

    return (
        <div className="product-card">
            { modalActive && <InfoModal product={product} modalSwitch={modalSwitch} addToCart={addToCart}/> }
            <div className="product-description">
                <p>Items / {product.category}</p>
                <img src={product.image} alt=""/>
                <p>{product.title}</p>
                <div className="rating">
                    <p>{product.rating.rate}⭐</p>
                    <span>{product.rating.count} rewievs</span>
                </div>
            </div>
            <div className="product-buttons">
                <button onClick={modalSwitch}>About</button>
                <button onClick={addToCart} data-id={product.id}>Add to cart</button>
            </div>
        </div>
    )
}

export default ProductCard;