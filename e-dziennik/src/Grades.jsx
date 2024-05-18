import { useState, } from 'react'
import './App.css'
import Button from './components/Button'
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
  const [showForm, setShowForm] = useState(false);

  const handleButtonClick = () => {
    setShowForm(true);
  };

  const handleClose = () => {
    setShowForm(false);
  };

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
    <Button onClickFunction={handleButtonClick} buttonText="Dodaj ocenę" addArrow="true" />
    {showForm && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={handleClose}>&times;</span>
            <h2>Formularz</h2>
            <form className="form">
              <div className="form-group">
                <label htmlFor="name">Imię:</label>
                <input type="text" id="name" name="name" />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email:</label>
                <input type="email" id="email" name="email" />
              </div>
              <div className="form-group">
              <Button onClickFunction={handleClose} buttonText="Wyślij" />
              </div>
            </form>
          </div>
        </div>
      )}
      <img src="https://images.unsplash.com/photo-1508921912186-1d1a45ebb3c1?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cGhvdG98ZW58MHx8MHx8fDA%3D" />
    </main>
    </div>
  )
}

export default Grades;
