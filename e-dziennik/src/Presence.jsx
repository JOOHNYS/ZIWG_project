import { useState, } from 'react'
import './App.css'
import Button from './components/Button'
import Header from './Layouts/Header'
import Sidebar_teacher from './Layouts/Sidebar_teacher'
import Select from 'react-select'


function Presence() {

  // TODO      ----     Data from data base ---- classes which teacher has
  const options = [
    { value: 'chocolate', label: 'Chocolate' },
    { value: 'strawberry', label: 'Strawberry' },
    { value: 'vanilla', label: 'Vanilla' }
  ]
// TABLE ---- TODO ---- jakos ogarnac ilosc wierszy i kolumn tyle ile jest uczniow/ dni itd
  const handleButtonClick = () => {
    setShowForm(true);
  };

  return (
    <div className='grid-container'>
    <Header />
    <Sidebar_teacher />
    <main className='main-container'>
      <div className='main-header'>
        <Select className='dropdown' options={options} />
      </div>
      <table className='table-main'>
      <thead>
      <tr>
        <th>Uczeń</th>
        <th>Wypisane</th>
        <th>Dni</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>8:00 - 8:45</td>
        <td>Event 1</td>
        <td>Event 1</td>
      </tr>
      <tr>
      <td>8:55 - 9:40</td>
        <td>Event 2</td>
        <td>X</td>
      </tr>
    </tbody>
      </table>
    <Button onClickFunction={handleButtonClick} buttonText="Dodaj ocenę" addArrow="true" />
    </main>
    </div>
  )
}

export default Presence;
