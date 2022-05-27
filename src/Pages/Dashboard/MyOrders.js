import React, { useState } from 'react';
import { useQuery, refetch } from 'react-query';
import Loading from '../../Components/Loading';
import OrderRow from './OrderRow';

const MyOrders = () => {
    const [deleteOrder, setDeleteOrder] = useState(null);

    const { data: orders, isLoading } = useQuery(['orders', refetch], () =>
        fetch(`http://localhost:5000/orders`)
            .then(res => res.json())
    )
    if (isLoading) {
        return <Loading></Loading>;
    }
    return (
        <div>
            <h1 className="my-5 p-5 bg-accent font-bold">You have {orders.length} orders pending</h1>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Product Name</th>
                            <th>Product Quantity</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            orders.map((order, index) => <OrderRow
                                key={index}
                                index={index}
                                order={order}
                                refetch={refetch}
                                setDeleteOrder={setDeleteOrder}
                            ></OrderRow>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyOrders;