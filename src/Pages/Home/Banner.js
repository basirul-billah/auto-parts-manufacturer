import React from 'react';
import engineImg from '../../Assests/images/engine.png'

const Banner = () => {
    return (
        <div>
            {/* banner */}
            <section className="p-2 lg:p-10 md:flex lg:flex justify-between items-center">
                <div><img className='w-3/4 mx-auto mb-5' src={engineImg} alt="engine" /></div>
                <div className='lg:w-1/2 mx-auto'>
                    <h1 className='text-center md:text-left text-2xl lg:text-5xl font-bold mb-8'>Build Your First Engine!</h1>
                    <h1 className='text-center md:text-left lg:text-xl mb-8'>We offer a variety of industry leading products and services to support energetic start-ups to make their own impression on the highly competitive automotive market.</h1>
                    <div>
                        <input type="text" placeholder="Enter email" className="input input-sm lg:input-md input-bordered input-primary lg:w-full max-w-xs mr-3" />
                        <button className="btn btn-sm lg:btn-md btn-primary">get started</button>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Banner;