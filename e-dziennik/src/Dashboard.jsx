import { useState, } from 'react'
import './App.css'
import Header from './Layouts/Header'
import Home from './Layouts/Home'
import Sidebar_teacher from './Layouts/Sidebar_teacher'

function Dashboard() {

  return (
    <div className='grid-container'>
    <Header />
    <Sidebar_teacher />
    <Home />
    </div>
  )
}

export default Dashboard;
