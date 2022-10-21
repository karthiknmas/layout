import './App.css';
import React, { useState } from 'react';
import { Route, Routes } from 'react-router-dom'
import Menu1 from './menu1';
import Menu2 from './menu2';
import Menu3 from './menu3';
import Menu4 from './menu4';
import MainLayout from './mainlayout'
import Header from './header'
import Sidebaritems from './sidebaritems'
import Footer from './footer'

function App() {

  const [sidebar, setSidebar] = useState(false);
 
  const togglesidebar = () => {
    setSidebar(!sidebar)
  }

  return (
    <div className="main">
      <Header openSidebar={togglesidebar} />
      <div animate={{ width: sidebar ? "200px" : "45px" }} className={sidebar ? "sidebar sidebar--open" : "sidebar"} >
        <Sidebaritems />
      </div>
      <div className="container">
        <Routes>
          <Route Redirect to={<MainLayout />} path="/" element={<MainLayout />} />
          <Route path="menu1" element={<Menu1 />} />
          <Route path="menu2" element={<Menu2 />} />
          <Route path="menu3" element={<Menu3 />} />
          <Route path="menu4" element={<Menu4 />} />
        </Routes>
      </div>
      <div className="footer">
        <Footer />
      </div>
    </div>
  );
}

export default App;
