import { useState, } from 'react'
import './App.css'
import Header from './Layouts/Header'
import Home from './Layouts/Home'
import Sidebar_teacher from './Layouts/Sidebar_teacher'
import Select from 'react-select'



function Grades() {

  // TODO      ----     Data from data base ---- classes which teacher has
  const options = [
    { value: 'chocolate', label: 'Chocolate' },
    { value: 'strawberry', label: 'Strawberry' },
    { value: 'vanilla', label: 'Vanilla' }
  ]

// TABLE ---- TODO ---- jakos ogarnac ilosc wierszy i kolumn tyle ile jest uczniow/ ocen itd
// DODAJ OCENE ---- FORMULARZ DODAWANIA OCENY/ EDYTOWANIA
  return (
    <div className='grid-container'>
    <Header />
    <Sidebar_teacher />
    <main className='main-container'>
      <div className='main-header'>
        <Select className='dropdown' options={options} />
        <button className='button-main'>
          Dodaj ocenę
        </button>
      </div>
      <table className='table-main'>
      <thead>
      <tr>
        <th>Hours</th>
        <th>Events</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>8:00 - 8:45</td>
        <td>Event 1
        </td>
      </tr>
      <tr>
      <td>8:55 - 9:40</td>
        <td>Event 2</td>
      </tr>
    </tbody>
      </table>
    </main>
    </div>
  )
}

export default Grades;
