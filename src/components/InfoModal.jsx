import '../styles/InfoModal.css';

function InfoModal(props) {
    const product = props.product;
    const modalSwitch = props.modalSwitch;
    const addToCart = props.addToCart;
    return (
        <div className="modal-container">
            <div className="modal-info">
                <div className="modal-title">
                    {product.title}
                </div>
                <div className="modal-content">
                    <img src={product.image} alt="" />
                    <div>
                        {product.description}
                        <br />
                        <button onClick={addToCart} data-id={product.id}>Add to cart</button>
                    </div>
                </div>
                <button onClick={modalSwitch}>Close</button>
            </div>
        </div>
        
    )
}

export default InfoModal;