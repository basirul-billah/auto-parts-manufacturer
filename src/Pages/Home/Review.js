import React from 'react';

const Review = ({ review }) => {
    const { customerName, customerReview, rating } = review;

    return (
        <div className="card w-full lg:w-96 bg-base-100 shadow-xl">
            <div className="card-body">
                <div className='flex justify-start items-start'>
                    <div className="avatar">
                        <div className="w-12 rounded-full mr-3">
                            <img src="https://placeimg.com/192/192/people" alt='avater' />
                        </div>
                    </div>
                    <div>
                        <h2 className="card-title">{customerName}</h2>
                        <p>Rating: {rating}</p>
                    </div>
                </div>
                <p>{customerReview}</p>
            </div>
        </div>
    );
};

export default Review;