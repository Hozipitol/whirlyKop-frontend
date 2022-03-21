import React from "react";

import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";

export const SidebarData = [
  {
    title: "Topic Selction",
    path: "/topic",
    icon: <FaIcons.FaBookReader />,
    cName: "nav-text"
  },
  {
    title: "Classroom",
    path: "/classroom",
    icon: <IoIcons.IoMdPeople />,
    cName: "nav-text"
  },
  {
    title: "Student Report",
    path: "/reports",
    icon: <IoIcons.IoIosPaper />,
    cName: "nav-text"
  }
];
