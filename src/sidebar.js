import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './App.css'

function Sidebar({ item }) {
    const [active, setActive] = useState(false);

    if (item.subNav) {
        return (
            <div className={active ? 'sidebar-item active' : 'sidebar-item'}>
                <div className="sidebar-title">
                    <span>
                        {item.icon && <i className={item.icon}></i>}
                        {item.title}
                    </span>
                    <i className="bi bi-chevron-down" onClick={() => setActive(!active)}></i>
                </div>
                <div className="sidebar-content">
                    {item.subNav.map((sub, i) => <Sidebar item={sub} key={i} />)}
                </div>
            </div>
        )
    } else {
        return (
            <NavLink to={item.path} className='sidebar-item'>
                <div className="sidebar-title">
                    <span>
                        {item.icon && <i className={item.icon ? "item.icon icon" : "item.icon"}></i>}
                        {item.title}    
                    </span>
                </div>
            </NavLink>
        );

    }
}
export default Sidebar;