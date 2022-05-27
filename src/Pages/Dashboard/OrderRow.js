import React from 'react';
import { toast } from 'react-toastify';

const OrderRow = ({ order, index, refetch, setDeleteOrder }) => {

    const { _id, orderName, orderQuantity } = order;

    return (
        <tr>
            <th>{index + 1}</th>
            <td>{orderName}</td>
            <td>{orderQuantity}</td>
            <td>
                <label
                    onClick={() => setDeleteOrder(order)}
                    htmlFor="delete-confirm-modal"
                    className="btn btn-xs btn-error"
                >Remove</label>
                <button className='btn btn-primary mr-2'>Purchase</button>
            </td>
        </tr>
    );
};

export default OrderRow;