import React from 'react';
import { useNavigate } from 'react-router-dom';

const Product = ({ item }) => {
    const { _id, name, img, minOrder, available, price } = item;
    const navigate = useNavigate()

    const handleBuyNow = id => {
        navigate(`/products/${id}`);
    }

    return (
        <div className="card w-40 md:w-44 bg-base-100 shadow-xl hover:shadow-2xl truncate">
            <figure><img className='w-full h-32' src={img} alt="product" /></figure>
            <div className="card-body p-3">
                <h2 className="truncate font-xl font-bold">{name}</h2>
                <p>{available} items available</p>
                <p className="text-slate-700 font-bold">$ {price}</p>
                <p>{minOrder} units (min. order)</p>
                <div className="card-actions justify-end">
                    <button onClick={() => handleBuyNow(_id)} className="btn btn-primary w-full">Buy Now</button>
                </div>
            </div>
        </div>
    );
};

export default Product;