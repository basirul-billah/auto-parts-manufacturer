import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from "react-hook-form";
import { toast } from 'react-toastify';
import auth from '../../firebase.init';

const AddReview = () => {
    const { register, formState: { errors }, handleSubmit } = useForm();
    const [user] = useAuthState(auth);

    const onSubmit = data => {
        const review = {
            customerName: user?.displayName,
            customerEmail: user?.email,
            customerReview: data.review,
            rating: data.rating,
        }

        fetch('https://secret-harbor-07747.herokuapp.com/reviews', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(review)
        })
            .then(res => res.json())
            .then(data => {
                if (data.success) {
                    toast("You have successfully reviewed!");
                }
                else {
                    console.log(data);
                }
            })
    }

    return (
        <div className="flex justify-center">
            <div className="card w-full bg-base-100 shadow-xl">
                <div className="card-body">
                    <h2 className="card-title">Add a review!</h2>
                    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col">
                        <textarea className="textarea textarea-bordered" placeholder="Write your review here"
                            {...register("review")}
                        />
                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Rate your review 1 to 5</span>
                            </label>
                            <input type="number" placeholder="Type here" className="input input-bordered w-full max-w-xs"
                                {...register("rating", {
                                    min: 1,
                                    max: 5,
                                    required: {
                                        value: true,
                                        message: 'You can only rate from 1 to 5.'
                                    }
                                })}
                            />
                            {errors.rating?.type === 'required' && <span className="label-text-alt text-red-600">{errors.rating.message}</span>}
                        </div>
                        <input type="submit" className="btn btn-primary mt-5" value="Submit" />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AddReview;