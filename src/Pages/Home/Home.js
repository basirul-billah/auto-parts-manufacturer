import React, { useEffect, useState } from 'react';
import Product from './Product';
import Review from './Review';

const Home = () => {
    const [products, setProducts] = useState([]);
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        fetch('products.json')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, []);

    useEffect(() => {
        fetch('reviews.json')
            .then(res => res.json())
            .then(data => setReviews(data))
    }, []);

    return (
        <div className="p-5">
            {/* banner */}
            <section className="bg-primary p-10 flex flex-col justify-center items-center">
                <h1 className="font-bold text-4xl"> Premium AAA Batteries</h1>
                <h3 className="font-bold text-3xl">Now Available</h3>
                <button className="btn mt-4">Check out now!</button>
            </section>

            {/* tools/parts */}
            <section>
                <h1 className="font-bold text-3xl my-4">Featured Products</h1>
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 justify-items-center">
                    {
                        products.slice(0, 3).map(product => <Product
                            key={product._id}
                            item={product}
                        ></Product>)
                    }
                </div>
            </section>

            {/* business summery section */}
            <section className="flex flex-col justify-center items-center">
                <h1 className="font-bold text-3xl my-4 text-center">Business Summary</h1>
                <div className="stats stats-vertical lg:stats-horizontal shadow">

                    <div className="stat">
                        <div className="stat-figure text-secondary">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-8 h-8 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                        </div>
                        <div className="stat-title">Customers</div>
                        <div className="stat-value">1000+</div>
                        <div className="stat-desc">2021 - 2022</div>
                    </div>

                    <div className="stat">
                        <div className="stat-figure text-secondary">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-8 h-8 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"></path></svg>
                        </div>
                        <div className="stat-title">Revenue</div>
                        <div className="stat-value">150M+</div>
                        <div className="stat-desc">↗︎ 22% growth</div>
                    </div>

                    <div className="stat">
                        <div className="stat-figure text-secondary">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-8 h-8 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4"></path></svg>
                        </div>
                        <div className="stat-title">Reviews</div>
                        <div className="stat-value">33K+</div>
                        <div className="stat-desc">85% positive</div>
                    </div>

                    <div className="stat">
                        <div className="stat-figure text-secondary">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="inline-block w-8 h-8 stroke-current"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
                        </div>
                        <div className="stat-title">Tools</div>
                        <div className="stat-value">50+</div>
                        <div className="stat-desc">Adding more</div>
                    </div>

                </div>
            </section>

            {/* reviews section  */}
            <section>
                <h1 className="font-bold text-3xl my-4 text-center">Customers Review</h1>
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 justify-items-center">
                    {
                        reviews.slice(0, 3).map(review => <Review
                            key={review._id}
                            review={review}
                        ></Review>)
                    }
                </div>
            </section>
        </div>
    );
};

export default Home;