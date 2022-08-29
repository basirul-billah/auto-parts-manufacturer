import React from 'react';
import engineImg from '../../Assests/images/engine.png'

const Banner = () => {
    return (
        <div>
            {/* banner */}
            <section className="p-10 flex justify-between items-center">
                <div className='w-1/2 mx-auto'>
                    <h1 className='text-5xl font-bold mb-8'>Build Your First Engine!</h1>
                    <h1 className='text-xl mb-8'>We offer a variety of industry leading products and services to support energetic start-ups to make their own impression on the highly competitive automotive market.</h1>
                    <div className=''>
                        <input type="text" placeholder="Enter email" className="input input-bordered input-primary w-full max-w-xs mr-3" />
                        <button class="btn btn-primary">get started</button>
                    </div>
                </div>
                <div><img className='w-3/4 mx-auto' src={engineImg} alt="engine" /></div>
            </section>
        </div>
    );
};

export default Banner;