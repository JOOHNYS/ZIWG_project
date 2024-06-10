import { useState, } from 'react'
import './App.css'
import Header from './Layouts/Header'
import Home from './Layouts/Home'
import Sidebar_teacher from './Layouts/Sidebar_teacher'
import {BsCaretLeftFill, BsCaretRightFill} from 'react-icons/bs'

function Plan() {
// TABLE ---- TODO ---- jakos ogarnac ilosc wierszy i kolumn tyle ile jest lekcji (z 8/9) i dni tygodnia (daty ?)
  return (
    <div className='grid-container'>
    <Header />
    <Sidebar_teacher />
    <main className='main-container'>
    <div className='main-header-right'>
        <button className='arrow-button'>
        <BsCaretLeftFill className='arrow-icon' />
      </button>
      <button className='arrow-button'>
        <BsCaretRightFill className='arrow-icon' />
      </button>
      </div>
      <table className='table-main'>
      <thead>
      <tr>
        <th>Hours</th>
        <th>Poniedziałek</th>
        <th>Wtorek</th>
        <th>Środa</th>
        <th>Czwartek</th>
        <th>Piątek</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>8:00 - 8:45</td>
        <td>Event 1</td>
        <td>Event 1</td>
        <td>Event 1</td>
        <td>Event 1</td>
        <td>Event 1</td>
      </tr>
      <tr>
      <td>8:55 - 9:40</td>
        <td>Event 2</td>
        <td>Event 2</td>
        <td>Event 2</td>
        <td>Event 2</td>
        <td>Event 2</td>
      </tr>
    </tbody>
      </table>
    </main>
    </div>
  )
}

export default Plan;
