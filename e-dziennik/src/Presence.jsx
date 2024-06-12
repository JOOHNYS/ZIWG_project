import { useState, } from 'react'
import './App.css'
import Button from './components/Button'
import Header from './Layouts/Header'
import Sidebar_teacher from './Layouts/Sidebar_teacher'
import Select from 'react-select'


function Presence() {

  // TODO      ----     Data from data base ---- classes which teacher has
  const options = [
    { value: '1a', label: '1a' },
    { value: '1b', label: '1b' },
    { value: '2a', label: '2a' },
    { value: '2b', label: '2b' }
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
      <div className='main-header-tables'>
        <Select className='dropdown' options={options} />
        <Button onClickFunction={handleButtonClick} buttonText="Dodaj obecność" addArrow="true" />
      </div>
      <table className='table-main'>
      <thead>
      <tr>
        <th>Uczeń</th>
        <th>03.06</th>
        <th>04.06</th>
        <th>05.06</th>
        <th>06.06</th>
        <th>10.06</th>
        <th>11.06</th>
        <th>12.06</th>
        <th>13.06</th>
        <th>14.06</th>
        <th>15.06</th>
        <th>17.06</th>
        <th>18.06</th>
        <th>19.06</th>
        <th>20.06</th>
        <th>21.06</th>
        <th>24.06</th>
        <th>25.06</th>
        <th>26.06</th>
        <th>27.06</th>
        <th>28.06</th>
      </tr>
    </thead>
    <tbody>
    <tr>
      <td>Babucha Maria</td>
      <td>+</td>
        <td>+</td>
        <td>+</td>
        <td>+</td>
        <td className='table_abcense'>-</td>
        <td className='table_abcense'>-</td>
        <td className='table_abcense'>-</td>
        <td className='table_abcense'>-</td>
        <td className='table_abcense'>-</td>
        <td className='table_abcense'>-</td>
        <td>+</td>
        <td>+</td>
        <td>+</td>
        <td>+</td>
        <td>+</td>
        <td>+</td>
        <td>+</td>
        <td>+</td>
        <td>+</td>
        <td>+</td>
      </tr>
      <tr>
      <td>Ferajna Ferdynard</td>
        <td className='table_abcense'>-</td>
        <td>+</td>
        <td>+</td>
        <td className='table_abcense'>-</td>
        <td className='table_abcense'>-</td>
        <td className='table_abcense'>-</td>
        <td className='table_abcense'>-</td>
        <td className='table_abcense'>-</td>
        <td className='table_abcense'>-</td>
        <td className='table_abcense'>-</td>
        <td>+</td>
        <td>+</td>
        <td>+</td>
        <td>+</td>
        <td>+</td>
        <td>+</td>
        <td>+</td>
        <td className='table_abcense'>-</td>
        <td className='table_abcense'>-</td>
        <td className='table_abcense'>-</td>
      </tr>
      <tr>
      <td>Gadzińska Aleksandra</td>
      <td>+</td>
        <td>+</td>
        <td>+</td>
        <td>+</td>
        <td>+</td>
        <td>+</td>
        <td>+</td>
        <td>+</td>
        <td>+</td>
        <td>+</td>
        <td>+</td>
        <td>+</td>
        <td>+</td>
        <td>+</td>
        <td>+</td>
        <td>+</td>
        <td>+</td>
        <td>+</td>
        <td>+</td>
        <td>+</td>
      </tr>
      <tr>
      <td>Gdera Weronika</td>
      <td>+</td>
        <td>+</td>
        <td>+</td>
        <td>+</td>
        <td className='table_abcense'>-</td>
        <td>+</td>
        <td>+</td>
        <td>+</td>
        <td>+</td>
        <td>+</td>
        <td className='table_abcense'>-</td>
        <td>+</td>
        <td>+</td>
        <td>+</td>
        <td>+</td>
        <td>+</td>
        <td className='table_abcense'>-</td>
        <td>+</td>
        <td>+</td>
        <td className='table_abcense'>-</td>
      </tr>
      <tr>
      <td>Hanaka Paweł</td>
      <td>+</td>
        <td>+</td>
        <td>+</td>
        <td>+</td>
        <td className='table_abcense'>-</td>
        <td className='table_abcense'>-</td>
        <td>+</td>
        <td>+</td>
        <td>+</td>
        <td>+</td>
        <td>+</td>
        <td>+</td>
        <td>+</td>
        <td>+</td>
        <td>+</td>
        <td>+</td>
        <td>+</td>
        <td>+</td>
        <td>+</td>
        <td className='table_abcense'>-</td>
      </tr>
      <tr>
      <td>Kożuchowska Tatiana</td>
      <td>+</td>
      <td className='table_abcense'>-</td>
      <td className='table_abcense'>-</td>
      <td className='table_abcense'>-</td>
        <td className='table_abcense'>-</td>
        <td>+</td>
        <td>+</td>
        <td>+</td>
        <td>+</td>
        <td>+</td>
        <td>+</td>
        <td>+</td>
        <td>+</td>
        <td>+</td>
        <td>+</td>
        <td>+</td>
        <td>+</td>
        <td>+</td>
        <td>+</td>
        <td>+</td>
      </tr>
      <tr>
      <td>Makówka Marcin</td>
      <td>+</td>
        <td>+</td>
        <td>+</td>
        <td>+</td>
        <td>+</td>
        <td>+</td>
        <td>+</td>
        <td>+</td>
        <td>+</td>
        <td>+</td>
        <td>+</td>
        <td>+</td>
        <td>+</td>
        <td>+</td>
        <td>+</td>
        <td>+</td>
        <td className='table_abcense'>-</td>
        <td className='table_abcense'>-</td>
        <td>+</td>
        <td>+</td>
      </tr>

      <tr>
        <td>Seidel Jan</td>
        <td>+</td>
        <td>+</td>
        <td>+</td>
        <td>+</td>
        <td>+</td>
        <td>+</td>
        <td>+</td>
        <td>+</td>
        <td>+</td>
        <td>+</td>
        <td>+</td>
        <td>+</td>
        <td>+</td>
        <td>+</td>
        <td>+</td>
        <td>+</td>
        <td>+</td>
        <td>+</td>
        <td>+</td>
        <td>+</td>
      </tr>
      
      <tr>
      <td>Skibińska Maja</td>
      <td>+</td>
        <td>+</td>
        <td>+</td>
        <td>+</td>
        <td>+</td>
        <td>+</td>
        <td>+</td>
        <td>+</td>
        <td>+</td>
        <td>+</td>
        <td>+</td>
        <td>+</td>
        <td>+</td>
        <td>+</td>
        <td>+</td>
        <td>+</td>
        <td>+</td>
        <td>+</td>
        <td>+</td>
        <td>+</td>
      </tr>
      <tr>
      <td>Terpiłowska Maja</td>
      <td>+</td>
        <td>+</td>
        <td>+</td>
        <td>+</td>
        <td>+</td>
        <td>+</td>
        <td>+</td>
        <td>+</td>
        <td>+</td>
        <td>+</td>
        <td>+</td>
        <td>+</td>
        <td>+</td>
        <td>+</td>
        <td>+</td>
        <td>+</td>
        <td>+</td>
        <td>+</td>
        <td>+</td>
        <td>+</td>
      </tr>
      <tr>
      <td>Tudejowicz Magdalena</td>
      <td>+</td>
        <td>+</td>
        <td>+</td>
        <td>+</td>
        <td>+</td>
        <td>+</td>
        <td>+</td>
        <td>+</td>
        <td>+</td>
        <td>+</td>
        <td className='table_abcense'>-</td>
        <td className='table_abcense'>-</td>
        <td>+</td>
        <td className='table_abcense'>-</td>
        <td>+</td>
        <td>+</td>
        <td>+</td>
        <td>+</td>
        <td>+</td>
        <td>+</td>
      </tr>
      <tr>
      <td>Zawada Mariusz</td>
      <td>+</td>
        <td>+</td>
        <td>+</td>
        <td>+</td>
        <td className='table_abcense'>-</td>
        <td className='table_abcense'>-</td>
        <td className='table_abcense'>-</td>
        <td>+</td>
        <td>+</td>
        <td>+</td>
        <td>+</td>
        <td>+</td>
        <td>+</td>
        <td>+</td>
        <td>+</td>
        <td>+</td>
        <td>+</td>
        <td>+</td>
        <td>+</td>
        <td>+</td>
      </tr>
    </tbody>
      </table>
    
    </main>
    </div>
  )
}

export default Presence;
