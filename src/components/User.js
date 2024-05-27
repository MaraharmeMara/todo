import React from 'react';
import logo from '../img/logo.png';

function User() {

    return (
        <div className='user'>
            <div className="logo">
                <img src={logo} alt="logo" />
            </div>
            <div className='info'>
                <p>ToDo App</p>
                <a href="#">Logout!</a>
            </div>
        </div>

    )
}
export default User;