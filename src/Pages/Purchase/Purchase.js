import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const Purchase = () => {
    const { productId } = useParams();
    const [product, setProduct] = useState({});

    useEffect(() => {
        fetch(`http://localhost:5000/products/${productId}`)
            .then(res => res.json())
            .then(data => setProduct(data))
    }, [])

    return (
        <div className="card w-96 bg-base-100 shadow-xl mx-auto mt-5">
            <figure><img className="h-60" src={product.img} alt="" /></figure>
            <div className="card-body">
                <h2 className="card-title">{product.name}</h2>
                <p>{product.description}</p>
                <div>
                    <p>{product.minOrder} units (Min. Order)</p>
                    <p>{product.available} items available</p>
                    <p className="text-lg font-bold">$ {product.price} USD (Per Unit)</p>
                </div>
            </div>
        </div>
    );
};

export default Purchase;