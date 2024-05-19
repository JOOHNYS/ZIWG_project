import { useState, } from 'react'
import './App.css'
import Header from './Layouts/Header'
import Home from './Layouts/Home'
import Sidebar_teacher from './Layouts/Sidebar_teacher'

function Plan() {

  return (
    <div className='grid-container'>
    <Header />
    <Sidebar_teacher />
    <main className='main-container'>
      <img src="https://images.pexels.com/photos/3680219/pexels-photo-3680219.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" />
    </main>
    </div>
  )
}

export default Plan;
