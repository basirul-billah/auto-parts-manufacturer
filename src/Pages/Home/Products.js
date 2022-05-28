import React, { useEffect, useState } from 'react';
import Product from './Product';
import axios from 'axios';

const Products = () => {
    const [products, setProducts] = useState([]);
    
    useEffect(() => {
        axios.get('http://localhost:5000/products')
            .then(data => setProducts(data))
    }, []);
    
    return (
        <section>
            {/* tools/parts */}
            <h1 className="font-bold text-3xl my-4">Featured Products</h1>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 justify-items-center">
                {
                    products.slice(0, 6).map(product => <Product
                        key={product._id}
                        item={product}
                    ></Product>)
                }
            </div>
        </section>
    );
};

export default Products;