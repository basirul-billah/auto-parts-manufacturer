import React from 'react';

const Banner = () => {
    return (
        <div>
            {/* banner */}
            <section className="bg-primary p-10 flex flex-col justify-center items-center">
                <h1 className="font-bold text-4xl"> Premium AAA Batteries</h1>
                <h3 className="font-bold text-3xl">Now Available</h3>
                <button className="btn mt-4">Check out now!</button>
            </section>
        </div>
    );
};

export default Banner;