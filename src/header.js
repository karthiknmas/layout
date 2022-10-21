import React from 'react';
import logo from './images/images.jpg'
import { Link } from 'react-router-dom';

function header({ openSidebar }) {

    const logOut = () => {
        console.log('muditu poda')
        alert('Log Out Successfully')
    }
    return (
        <div className="topnav">
            <Link to='/'>
                <img src={logo} height="60" width="150" alt="logo" />
            </Link>
            <div className="side" onClick={openSidebar}>
            <i className="bi bi-list position-absolute top-50 translate-middle-y"></i>
            </div>
            <button className="btn btn-primary position-absolute top-50 end-0 translate-middle-y" onClick={logOut}>Log out</button>
        </div>
    );
}
export default header;