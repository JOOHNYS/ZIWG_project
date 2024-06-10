import Cookies from 'js-cookie';
import Select from 'react-select'
import { useState, React } from 'react'
import Button from '../components/Button'

function Grades_teacher() {

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
        <main className='main-container'>
      <div className='main-header-tables'>
        <Select className='dropdown' options={options} />
        <Button onClickFunction={handleButtonClick} buttonText="Dodaj ocenę" addArrow="true" />
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
    </main>
    )
}

export default Grades_teacher;
