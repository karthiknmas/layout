import React from 'react';
// import { useNavigate } from 'react-router-dom'
import logo from './images/images.jpg'
import Footer from './footer'
import {
  CDBSidebar,
  CDBSidebarHeader,
  CDBSidebarMenuItem,
  CDBSidebarContent,
  CDBSidebarMenu,
  CDBSidebarFooter,
} from 'cdbreact';
import { NavLink } from 'react-router-dom';
import './App.css'

function SideNav() {
  // let navigate = useNavigate();
  return (
    <CDBSidebar textColor="#fff" backgroundColor="#333">
      <CDBSidebarHeader prefix={<i className="fa fa-bars fa-large"></i>}>
        <img src={logo} height="60" width="150" alt="logo" />
      </CDBSidebarHeader>
      <CDBSidebarContent className="sidebar-content">
        <CDBSidebarMenu>
          <NavLink to="menu1" style={({ isActive }) => ({
            color: isActive ? '#fff' : '#545e6f',
            background: isActive ? '#7600dc' : '#f0f0f0',
          })}>
            <CDBSidebarMenuItem icon="th-large">Menu 1</CDBSidebarMenuItem>
          </NavLink>
          <NavLink to="menu2" style={({ isActive }) => ({
            color: isActive ? '#fff' : '#545e6f',
            background: isActive ? '#7600dc' : '#f0f0f0',
          })}>
            <CDBSidebarMenuItem icon="sticky-note">Menu 2</CDBSidebarMenuItem>
          </NavLink>
          <NavLink to="menu3" style={({ isActive }) => ({
            color: isActive ? '#fff' : '#545e6f',
            background: isActive ? '#7600dc' : '#f0f0f0',
          })}>
            <CDBSidebarMenuItem icon="credit-card">Menu 3</CDBSidebarMenuItem>
          </NavLink>
          <NavLink to="menu4" style={({ isActive }) => ({
            color: isActive ? '#fff' : '#545e6f',
            background: isActive ? '#7600dc' : '#f0f0f0',
          })}>
            <CDBSidebarMenuItem icon="book">Menu 4</CDBSidebarMenuItem>
          </NavLink>
        </CDBSidebarMenu>
      </CDBSidebarContent>
      <CDBSidebarFooter className="footer">
        <Footer />
      </CDBSidebarFooter>
    </CDBSidebar>
  )
}
export default SideNav;