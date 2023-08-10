import {useEffect, useState} from "react";

const Products = () => {
    const [products, setProducts] = useState(null);

    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
            .then(result=>result.json())
            .then(json=>setProducts(json))
    }, [])

    return (
        <>
            {products && products.map((product) => (
                <p key={product.title}>{product.title}</p>
            ))}
        </>

    )
}

export default Products;