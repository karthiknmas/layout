import React from 'react';
// import * as FaIcons from 'react-icons-fa';
// import * as AiIcons from 'react-icons-ai';
// import * as IoIcons from 'react-icons-io';

export const SidebarData = [
    {
        title: 'Products',
        path: 'menu1',
        icon: 'bi bi-menu-up',
        subNav: [
            {
                title: 'Menu 1',
                path: 'menu1',
                // icon:<IoIcons.IoIosPaper />,
            },
            {
                title: 'Menu 2',
                path: 'menu1',
                // icon:<IoIcons.IoIosPaper />,
            }
        ]
    },
    {
        title: 'Orders',
        path: 'menu2',
        icon: 'bi bi-list-ul',
        subNav: [
            {
                title: 'Menu 1',
                path: 'menu2',
                // icon:<IoIcons.IoIosPaper />,
            },
            {
                title: 'Menu 2',
                path: 'menu2',
                // icon:<IoIcons.IoIosPaper />, 
            }
        ]
    },
    {
        title: 'Sales',
        path: 'menu3',
        icon: 'bi bi-cash',
        subNav: [
            {
                title: 'Menu 1',
                path: 'menu3',
                // icon:<IoIcons.IoIosPaper />,
            },
            {
                title: 'Menu 2',
                path: 'menu3',
                // icon:<IoIcons.IoIosPaper />,
            }
        ]
    },
    {
        title: 'Stock',
        path: 'menu4',
        icon: 'bi bi-blockquote-right',
        subNav: [
            {
                title: 'Menu 1',
                path: 'menu4',
                // icon:<IoIcons.IoIosPaper />,
            },
            {
                title: 'Menu 2',
                path: 'menu4',
                // icon:<IoIcons.IoIosPaper />,
            }
        ]
    }
]