import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../firebase.init';
import logo from '../Assests/logo/apm-logo.png'

const Navbar = () => {
    const [user] = useAuthState(auth);

    const logout = () => {
        signOut(auth);
        localStorage.removeItem('accessToken');
    };

    const menuItems = <>
        <li><Link className='font-bold' to='/home'>Home</Link></li>
        <li><Link className='font-bold' to='/home'>Products</Link></li>
        <li><Link className='font-bold' to='/home'>Accessories</Link></li>
        <li><Link className='font-bold' to='/home'>Contact us</Link></li>
        <li>{user && <Link className='font-bold' to='/dashboard'>Dashboard</Link>}</li>
        <li>{user && <Link className='font-bold' to='/dashboard/myprofile'>{user?.displayName}</Link>}</li>
    </>

    return (
        <div className="navbar bg-base-100 lg:px-14">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex="0" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex="0" className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        {menuItems}
                    </ul>
                </div>
                {/* website logo */}
                <Link to="/home" className="w-14"><img src={logo} alt="amp-logo" /></Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal p-0">
                    {menuItems}
                </ul>
            </div>
            <div className="navbar-end">
                {
                    user
                        ? <button onClick={logout} className="btn rounded-3xl bg-white border-hidden hover:bg-primary text-black drop-shadow-xl">Sign Out</button>
                        : <Link to='/login' className="btn rounded-3xl bg-white border-hidden hover:bg-primary text-black drop-shadow-xl">Login</Link>
                }

            </div>
        </div>
    );
};

export default Navbar;