import React from 'react';

const OrderRow = ({ order, index, setDeleteOrder }) => {

    const { orderName, orderQuantity } = order;

    return (
        <tr>
            <th>{index + 1}</th>
            <td>{orderName}</td>
            <td>{orderQuantity}</td>
            <td>
                <label
                    onClick={() => setDeleteOrder(order)}
                    htmlFor="delete-confirm-modal"
                    className="btn btn-xs btn-error mr-2"
                >Remove</label>
                <button className='btn btn-xs btn-success'>Purchase</button>
            </td>
        </tr>
    );
};

export default OrderRow;