import { useState, React } from 'react'
import {BsHouse, BsMortarboard, BsPeople, BsCalendar3, BsBoxArrowLeft } from 'react-icons/bs'
import { PieChart, Pie, Sector, Cell, ResponsiveContainer } from 'recharts';
import Cookies from 'js-cookie';

function Home() {

    const [classStudentsNumber, setclassStudentsNumber] = useState(30);
    const [presentStudentsNumber, setpresentStudentsNumber] = useState(24);
    let absentStudentsNumber = classStudentsNumber - presentStudentsNumber;

    return (
    <main className='main-container'>
        <div className='main-title'>
            <h2>Witamy {Cookies.get('user')}</h2>
        </div>
        <div className='under-title'>
        <h4>elektroniczny dziennik do Twoich usług</h4>
        </div>
        <div className='main-cards'>
        <div className='card'>
            <div className='cards-inner'>
                <h3>LICZBA UCZNIÓW W KLASIE</h3>
            </div>
            <h1>{classStudentsNumber}</h1>
            </div>
            <div className='card'>
            <div className='cards-inner'>
                <h3>ILOŚĆ NIEOBECNYCH UCZNIÓW</h3>
            </div>
            <h1>{absentStudentsNumber}</h1>
            </div>
            <div className='card'>
            <div className='cards-inner'>
                <h3>ILOŚĆ OBECNYCH UCZNIÓW</h3>
            </div>
            <h1>{presentStudentsNumber}</h1>
            </div>
        </div>


        <table className='hrs_schedule'>
    <thead>
      <tr>
        <th className='hrs_schedule_class'>Lekcja</th>
        <th className='hrs_schedule_time'>Godzina rozpoczęcia</th>
        <th className='hrs_schedule_time'>Godzina zakończenia</th>
        <th className='hrs_schedule_time'>Czas przerwy</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>1</td>
        <td>8:00</td>
        <td>8:45</td>
        <td>10 minut</td>
      </tr>
      <tr>
      <td>2</td>
        <td>8:55</td>
        <td>9:40</td>
        <td>10 minut</td>
      </tr>
      <tr>
      <td>3</td>
        <td>9:50</td>
        <td>10:35</td>
        <td>10 minut</td>
      </tr>
      <tr>
      <td>4</td>
        <td>10:45</td>
        <td>11:30</td>
        <td>10 minut</td>
      </tr>
      <tr>
      <td>5</td>
        <td>11:40</td>
        <td>12:25</td>
        <td>20 minut</td>
      </tr>
      <tr>
      <td>6</td>
        <td>12:45</td>
        <td>13:30</td>
        <td>10 minut</td>
      </tr>
      <tr>
      <td>7</td>
        <td>13:40</td>
        <td>14:25</td>
        <td>5 minut</td>
      </tr>
      <tr>
      <td>8</td>
        <td>14:30</td>
        <td>15:15</td>
        <td>5 minut</td>
      </tr>
    </tbody>
  </table>   
        
    </main>
  )
}

export default Home
