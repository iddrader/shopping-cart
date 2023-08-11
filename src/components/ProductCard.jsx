const ProductCard = (props) => {
    const product = props.product;
    const addToCart = props.addToCart;

    return (
        <div className="product-card">
            <div className="product-description">
                <p>Items / {product.category}</p>
                <img src={product.image} alt=""/>
                <p>{product.title}</p>
                <div className="rating">
                    <p>{product.rating.rate}⭐</p>
                    <span>{product.rating.count} rewievs</span>
                </div>
                <p>{product.description}</p>
            </div>
            <button onClick={addToCart} data-id={product.id}>Add to cart</button>
        </div>
    )
}

export default ProductCard;