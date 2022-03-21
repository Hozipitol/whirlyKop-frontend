import React from 'react'
import Sidebar from '../Sidebar/Sidebar';
import { BrowserRouter,  Switch, Route } from "react-router-dom";
import Topic from '../Topic/Topic'

function Dashboard() {
  return (
    <div>
    <Sidebar />
    </div>
  )
}

export default Dashboard