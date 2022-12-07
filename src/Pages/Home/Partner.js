import React from 'react';

const Partner = ({ partner }) => {
    const { optimized } = partner;

    return (
        <div className='w-20 h-20 bg-white flex justify-center items-center rounded'>
            <img src={optimized} alt="partner-logo" />
        </div>
    );
};

export default Partner;