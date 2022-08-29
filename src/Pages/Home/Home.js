import React from 'react';
import Banner from './Banner';
import BusinessSummery from './BusinessSummery';
import Newsletter from './Newsletter';
import Products from './Products';
import Reviews from './Reviews';

const Home = () => {

    return (
        <div className="p-5">
            <Banner></Banner>
            <BusinessSummery></BusinessSummery>
            <Products></Products>
            <Reviews></Reviews>
            <Newsletter></Newsletter>
        </div>
    );
};

export default Home;