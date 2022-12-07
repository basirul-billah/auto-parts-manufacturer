import React from 'react';
import Banner from './Banner';
import BusinessSummery from './BusinessSummery';
import Partners from './Partners';
import Products from './Products';
import Reviews from './Reviews';

const Home = () => {

    return (
        <div className="p-5">
            <Banner></Banner>
            <Partners></Partners>
            <Products></Products>
            <BusinessSummery></BusinessSummery>
            <Reviews></Reviews>
        </div>
    );
};

export default Home;