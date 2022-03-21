import React, { useState } from "react";

// ICONS
import * as FaIcons from "react-icons/fa"; //Now i get access to all the icons
import * as AiIcons from "react-icons/ai";

import { IconContext } from "react-icons";
// import {Navbar, Container, Nav } from 'react-bootstrap'

// ROUTING

import { Link } from "react-router-dom";

// DATA FILE
import { SidebarData } from "./SidebarData";

// STYLES
import "./Sidebar.css";
function Sidebar() {
    const [sidebar, setSidebar] = useState(false);

    const showSidebar = () => setSidebar(!sidebar);
  
  return (
    <>
         <IconContext.Provider value={{ color: "red" }}>
        {/* All the icons now are white */}
        <div className="sidebar" style={{ backgroundColor: "white" }}>
          <Link to="#" className="menu-bars">
            <FaIcons.FaBars onClick={showSidebar} />
          </Link>
        </div>
        <nav
          style={{ backgroundColor: "lightgray" }}
          className={sidebar ? "side-menu active" : "side-menu"}
        >
          <ul className="side-menu-items" onClick={showSidebar}>
            <li
              style={{ backgroundColor: "lightgray" }}
              className="sidebar-toggle"
            >
              <Link to="#" className="menu-bars">
                <AiIcons.AiOutlineClose />
              </Link>
            </li>

            {SidebarData.map((item, index) => {
              return (
                <li key={index} className={item.cName}>
                  <Link to={item.path}>
                    {item.icon}
                    <span>{item.title}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </IconContext.Provider>
    </>
  )
}

export default Sidebar