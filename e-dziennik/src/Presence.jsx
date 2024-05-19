import { useState, } from 'react'
import './App.css'
import Header from './Layouts/Header'
import Home from './Layouts/Home'
import Sidebar_teacher from './Layouts/Sidebar_teacher'

function Presence() {

  return (
    <div className='grid-container'>
    <Header />
    <Sidebar_teacher />
    <main className='main-container'>
      <img src="https://static.vecteezy.com/vite/assets/photo-masthead-375-b8ae1548.webp" />
    </main>
    </div>
  )
}

export default Presence;
