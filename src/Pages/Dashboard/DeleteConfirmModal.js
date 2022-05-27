import React from 'react';
import { toast } from 'react-toastify';

const DeleteConfirmModal = ({ deletingOrder, refetch, setDeleteOrder }) => {

    const { _id } = deletingOrder;

    const handleDelete = () => {
        fetch(`http://localhost:5000/orders/${_id}`, {
            method: 'DELETE',
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.deletedCount) {
                    toast.success('Product deleted.')
                    setDeleteOrder(null);
                    refetch();
                }
            })
    }
    return (
        <div>
            <input type="checkbox" id="delete-confirm-modal" className="modal-toggle" />
            <div className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">
                    <h3 className="font-bold text-lg">Are you sure you want to delete this item?</h3>
                    <div className="modal-action">
                        <button onclick={handleDelete} className="btn btn-error">Delete</button>
                        <label for="delete-confirm-modal" className="btn">Cancel</label>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DeleteConfirmModal;