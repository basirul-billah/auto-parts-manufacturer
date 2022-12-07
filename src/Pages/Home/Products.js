import React, { useEffect, useState } from 'react';
import Product from './Product';
import axios from 'axios';

const Products = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        axios.get('https://secret-harbor-07747.herokuapp.com/products')
            .then(data => setProducts(data.data))
    }, []);

    return (
        <section>
            {/* tools/parts */}
            <h1 className="font-bold text-3xl my-4">Featured Products</h1>
            <div className="divider"></div> 
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-5 justify-items-center">
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