import React from 'react';
import logo from './../../images/Logo.svg'
import './Header.css'
import { Outlet } from 'react-router-dom';

const Header = () => {
    return (
        <div>
            <nav className='header'>
            <img src={logo} alt="" />
            <div className='url-section'>
                <a href="/">Shop</a>
                <a href="/orders">Order</a>
                <a href="/inventory">Inventory</a>
                <a href="/login">Login</a>
            </div>
            {/* <Outlet></Outlet> */}
        </nav>
        </div>
    );
};

export default Header;