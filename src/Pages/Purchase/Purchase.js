import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { useForm } from "react-hook-form";
import { toast } from 'react-toastify';

const Purchase = () => {
    const { register, formState: { errors }, handleSubmit } = useForm();
    const { productId } = useParams();
    const [user] = useAuthState(auth);
    const [product, setProduct] = useState({});

    
    const onSubmit = (data, e) => {

        e.preventDefault();
        
        const order = {
            orderId: product._id,
            orderName: e.target.productName.value,
            orderQuantity: data.quantity,
            customerName: data.name,
            customerEmail: data.email,
            customerAddress: data.address,
            customerPhone: data.phone,
        }

        fetch('http://localhost:5000/orders', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(order)
        })
            .then(res => res.json())
            .then(data => {
                if (data.success) {
                    toast("Your order is successfully placed!");
                }
            })
    }
    
    useEffect(() => {
        fetch(`http://localhost:5000/products/${productId}`)
        .then(res => res.json())
        .then(data => setProduct(data))
    }, [])
    

    return (
        <div className="grid grid-cols-1 lg:grid-cols-2 justify-center mt-5">
            <div className="card w-96 bg-base-100 shadow-xl">
                <figure><img className="h-60" src={product.img} alt="" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{product.name}</h2>
                    <p>{product.description}</p>
                    <div>
                        <p>{product.minOrder} units (Min. Order)</p>
                        <p>{product.available} items available</p>
                        <p className="text-lg font-bold">$ {product.price} USD (Per Unit)</p>
                    </div>
                </div>
            </div>
            <div className="mt-10 lg:mt-0">
                {/* checkout form */}
                <form onSubmit={handleSubmit(onSubmit)} className="card w-96 bg-base-100 shadow-xl p-5">
                    <p className="text-gray-800 text-xl font-medium my-2">Customer information</p>

                    {/* name field */}
                    <div className="">
                        <label className="block text-sm text-gray-00" htmlFor="cus_name">Name</label>
                        <input
                            className="w-full px-2 py-1 text-gray-700 bg-gray-200 rounded"
                            type="text"
                            placeholder="Your Name"
                            value={user?.displayName || ' '}
                            {...register("name")}
                        />
                    </div>

                    {/* email field */}
                    <div className="mt-2">
                        <label className="block text-sm text-gray-600" htmlFor="cus_email">Email</label>
                        <input className="w-full px-2 py-1 text-gray-700 bg-gray-200 rounded" id="cus_email" name="cus_email" type="text" required value={user?.email || ' '} placeholder="Your Email" {...register("email")} />
                    </div>

                    {/* address field */}
                    <div className="mt-2">
                        <label className=" block text-sm text-gray-600" htmlFor="cus_email">Address</label>
                        <textarea
                            className="w-full px-2 py-2 text-gray-700 bg-gray-200 rounded"
                            type="text"
                            placeholder="Your full address"
                            name="address"
                            {...register("address", {
                                required: {
                                    value: true,
                                    message: 'Address is required'
                                },
                            })
                            }
                        />
                        {errors.address?.type === 'required' && <span className="label-text-alt text-red-600">{errors.address.message}</span>}
                    </div>

                    {/* phone number field */}
                    <div className="mt-2">
                        <label className=" block text-sm text-gray-600" htmlFor="cus_email">Phone Number</label>
                        <input
                            className="w-full px-2 py-2 text-gray-700 bg-gray-200 rounded"
                            type="number"
                            placeholder="Your phone number"
                            {...register("phone", {
                                required: {
                                    value: true,
                                    message: 'Phone number is required'
                                }
                            })}
                        />
                        {errors.phone?.type === 'required' && <span className="label-text-alt text-red-600">{errors.phone.message}</span>}
                    </div>

                    {/* order summery */}
                    <p className="text-gray-800 text-xl font-medium my-2">Order Summery</p>

                    {/* product name */}
                    <div className="mt-2">
                        <label className=" block text-sm text-gray-600" htmlFor="cus_email">Product Name</label>
                        <input
                            className="w-full px-2 py-2 text-gray-700 bg-gray-200 rounded"
                            type="text"
                            placeholder="Product Name"
                            value={product.name}
                            name="productName"
                        />
                    </div>

                    {/* product quantity */}
                    <div className="mt-2">
                        <label className=" block text-sm text-gray-600" htmlFor="cus_email">Quantity</label>
                        <input
                            className="w-full px-2 py-2 text-gray-700 bg-gray-200 rounded"
                            type="number"
                            placeholder="Product quantity"
                            {...register("quantity", {
                                min: product.minOrder,
                                max: product.available,
                                required: {
                                    value: true,
                                    message: 'Quantity cannot be less than minimum order or greater than available items.'
                                }
                            })
                            }
                        />
                        {errors.quantity?.type === 'required' && <span className="label-text-alt text-red-600">{errors.quantity.message}</span>}
                    </div>

                    <div className="mt-2">
                        <input className='btn' type="submit" value="Confirm Order" />
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Purchase;