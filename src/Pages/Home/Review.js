import React from 'react';

const Review = ({ review }) => {
    const { customerName, customerReview, rating } = review;
    
    return (
        <div className="card w-96 bg-primary text-neutral-content">
            <div className="card-body items-center text-center">
                <h2 className="card-title">{customerName}</h2>
                <p>{customerReview}</p>
                <p>Rating: {rating}</p>
            </div>
        </div>
    );
};

export default Review;