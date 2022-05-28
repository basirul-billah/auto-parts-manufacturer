import React, { useState } from 'react';
import { useQuery } from 'react-query';
import { useAuthState } from 'react-firebase-hooks/auth';
import Loading from '../../Components/Loading';
import OrderRow from './OrderRow';
import auth from '../../firebase.init';
import DeleteConfirmModal from './DeleteConfirmModal';

const MyOrders = () => {
    const [user] = useAuthState(auth);
    const [deleteOrder, setDeleteOrder] = useState(null);

    const { data: orders, isLoading, refetch } = useQuery('orders', () => fetch(`http://localhost:5000/orders?customerEmail=${user.email}`,)
        .then(res => res.json()));

    if (isLoading) {
        return <Loading></Loading>
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
                                setDeleteOrder={setDeleteOrder}
                            ></OrderRow>)
                        }
                    </tbody>
                </table>
            </div>
            {
                deleteOrder && <DeleteConfirmModal
                    deleteOrder={deleteOrder}
                    refetch={refetch}
                    setDeleteOrder={setDeleteOrder}
                ></DeleteConfirmModal>
            }
        </div>
    );
};

export default MyOrders;