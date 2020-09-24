import React from 'react';
import './Header.css';
import logo from '../../images/logo.png';

const Header = () => {
    return (
        <div className="header">
            <img src={logo} alt=""/>

            <nav>
                <div className="nav">
                    <a href="/shop">Shop</a>
                    <a href="/review">Order Review</a>
                    <a href="/manage">Manage Inventory Here</a>
                </div>
                
             </nav>

        </div>

        
    );
};

export default Header;