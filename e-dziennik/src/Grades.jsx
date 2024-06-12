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
    { value: '1a', label: '1a' },
    { value: '1b', label: '1b' },
    { value: '2a', label: '2a' },
    { value: '2b', label: '2b' }
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
      <div className='main-header-tables'>
        <Select className='dropdown' options={options} />
        <Button onClickFunction={handleButtonClick} buttonText="Dodaj ocenę" addArrow="true" />
      </div>
      <table className='table-main'>
      <thead>
      <tr>
        <th className='table_name'>Nazwisko i Imię</th>
        <th>Spr 1</th>
        <th>Kart 1</th>
        <th>Dom 1</th>
        <th>Kart 2</th>
        <th>Dom 2</th>
        <th>Spr 2</th>
        <th>Kart 3</th>
        <th>Kart 4</th>
        <th>Dom 3</th>
        <th>Spr 3</th>
      </tr>
    </thead>
    <tbody>
    <tr>
      <td>Babucha Maria</td>
        <td className='bad-grade-2'>2</td>
        <td>4</td>
        <td>5</td>
        <td>3</td>
        <td>5</td>
        <td>4</td>
        <td>3</td>
        <td>3</td>
        <td>3</td>
        <td>6</td>
      </tr>
      <tr>
      <td>Ferajna Ferdynard</td>
        <td className='bad-grade-1'>1</td>
        <td>4</td>
        <td className='bad-grade-1'>1</td>
        <td className='bad-grade-2'>2</td>
        <td className='bad-grade-2'>2</td>
        <td>4</td>
        <td className='bad-grade-1'>1</td>
        <td>3</td>
        <td>3</td>
        <td>3</td>
      </tr>
      <tr>
      <td>Gadzińska Aleksandra</td>
        <td>6</td>
        <td>5</td>
        <td>5</td>
        <td>4</td>
        <td>5</td>
        <td>4</td>
        <td>5</td>
        <td>5</td>
        <td>4</td>
        <td>6</td>
      </tr>
      <tr>
      <td>Gdera Weronika</td>
        <td>5</td>
        <td>4</td>
        <td>5</td>
        <td>4</td>
        <td>5</td>
        <td>4</td>
        <td>4</td>
        <td>3</td>
        <td>4</td>
        <td>6</td>
      </tr>
      <tr>
      <td>Hanaka Paweł</td>
        <td>6</td>
        <td>6</td>
        <td>4</td>
        <td>6</td>
        <td>5</td>
        <td>5</td>
        <td>5</td>
        <td>6</td>
        <td>5</td>
        <td>6</td>
      </tr>
      <tr>
      <td>Kożuchowska Tatiana</td>
        <td>4</td>
        <td>4</td>
        <td>5</td>
        <td>3</td>
        <td>5</td>
        <td>4</td>
        <td>4</td>
        <td>4</td>
        <td>4</td>
        <td>5</td>
      </tr>
      <tr>
      <td>Makówka Marcin</td>
        <td>4</td>
        <td>4</td>
        <td>4</td>
        <td>3</td>
        <td>4</td>
        <td>4</td>
        <td>4</td>
        <td>3</td>
        <td>4</td>
        <td>5</td>
      </tr>

      <tr>
        <td>Seidel Jan</td>
        <td>6</td>
        <td>5</td>
        <td>4</td>
        <td>5</td>
        <td>4</td>
        <td>5</td>
        <td>4</td>
        <td>5</td>
        <td>4</td>
        <td>6</td>
      </tr>
      
      <tr>
      <td>Skibińska Maja</td>
        <td>5</td>
        <td>4</td>
        <td>5</td>
        <td>4</td>
        <td>5</td>
        <td>5</td>
        <td>6</td>
        <td>5</td>
        <td>4</td>
        <td>5</td>
      </tr>
      <tr>
      <td>Terpiłowska Maja</td>
        <td>6</td>
        <td>5</td>
        <td>5</td>
        <td>6</td>
        <td>5</td>
        <td>4</td>
        <td>4</td>
        <td>5</td>
        <td>5</td>
        <td>5</td>
      </tr>
      <tr>
      <td>Tudejowicz Magdalena</td>
        <td className='bad-grade-1'>1</td>
        <td>3</td>
        <td>5</td>
        <td>4</td>
        <td>5</td>
        <td className='bad-grade-2'>2</td>
        <td>4</td>
        <td>3</td>
        <td>4</td>
        <td>6</td>
      </tr>
      <tr>
      <td>Zawada Mariusz</td>
        <td>3</td>
        <td>4</td>
        <td>5</td>
        <td>3</td>
        <td>3</td>
        <td>3</td>
        <td>4</td>
        <td>5</td>
        <td>4</td>
        <td>5</td>
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
    </div>
  )
}

export default Grades;
