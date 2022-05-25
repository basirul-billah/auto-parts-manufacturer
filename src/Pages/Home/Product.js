import React from 'react';
import { useNavigate } from 'react-router-dom';

const Product = ({item}) => {
    const { _id, name, img, description, minOrder, available, price} = item;
    const navigate = useNavigate()

    const handleBuyNow = id => {
        navigate(`/products/${id}`);
    }
    
    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <figure><img className="h-60" src={img} alt="" /></figure>
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <p>{description}</p>
                <div>
                    <p>{minOrder} units (Min. Order)</p>
                    <p>{available} items available</p>
                    <p className="text-lg font-bold">$ {price} USD (Per Unit)</p>
                </div>
                <div className="card-actions justify-end">
                    <button onClick={() => handleBuyNow(_id)} className="btn btn-primary">
                        Buy Now
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Product;