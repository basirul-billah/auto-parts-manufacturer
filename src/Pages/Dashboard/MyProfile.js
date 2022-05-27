import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const MyProfile = () => {
    const [user] = useAuthState(auth);

    return (
        <div>
            <div className="card w-96 bg-base-100 shadow-xl">
                <div className="card-body items-center text-center">
                    <h2 className="card-title">{user?.displayName}</h2>
                    <p>{user?.email}</p>
                    
                </div>
            </div>
        </div>
    );
};

export default MyProfile;