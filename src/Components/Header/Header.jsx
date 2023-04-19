import React, { useContext } from 'react';
import logo from './../../images/Logo.svg'
import './Header.css'
import { Outlet } from 'react-router-dom';
import { AuthContex } from '../Providers/AuthProvider';

const Header = () => {

    const {user} = useContext(AuthContex)
    return (
        <div>
            <nav className='header'>
            <img src={logo} alt="" />
            <div className='url-section'>
                <a href="/">Shop</a>
                <a href="/orders">Order</a>
                <a href="/inventory">Inventory</a>
                <a href="/login">Login</a>
                <a href="/singup">Sing Up</a>
            </div>
        </nav>
        {
            user && <p>{user.displayname}</p>
        }
        </div>
    );
};

export default Header;