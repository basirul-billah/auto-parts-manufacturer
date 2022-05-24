import React from 'react';

const Review = ({ review }) => {
    const { name, comment } = review;
    return (
        <div className="card w-96 bg-primary text-neutral-content">
            <div className="card-body items-center text-center">
                <h2 className="card-title">{name}</h2>
                <p>{comment}</p>
            </div>
        </div>
    );
};

export default Review;