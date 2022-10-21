import React from 'react';
import { SidebarData } from './sidebarData'
import Sidebar from './sidebar'

const Sidebaritems = () => {

  return (
    <div style={{ marginTop: '70px' }} >
      {SidebarData.map((item, index) =>
        <Sidebar item={item} key={index}/>
      )}
    </div>
  )
}

export default Sidebaritems;