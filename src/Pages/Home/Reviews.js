import React, { useEffect, useState } from 'react';
import Review from './Review';

const Reviews = () => {
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/reviews')
            .then(res => res.json())
            .then(data => setReviews(data))
    }, []);

    return (

        <section>
            {/* reviews section  */}
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

    );
};

export default Reviews;