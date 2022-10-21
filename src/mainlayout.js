import React from 'react';
import { Outlet } from 'react-router-dom'

function MainLayout(props) {
    return (
        <div>
            <div className="main">
            <Outlet {...props}/>
            </div>
        </div>
    )
}

export default MainLayout;