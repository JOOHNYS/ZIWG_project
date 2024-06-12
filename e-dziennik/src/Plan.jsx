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
        <th className='hrs_schedule_class'>Godzina lekcyjna</th>
        <th className='table_days'>Poniedziałek</th>
        <th className='table_days'>Wtorek</th>
        <th className='table_days'>Środa</th>
        <th className='table_days'>Czwartek</th>
        <th className='table_days'>Piątek</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>1</td>
        <td>Język angielski 2b</td>
        <td></td>
        <td></td>
        <td>Język angielski 1a</td>
        <td>Język angielski dodatkowy</td>
      </tr>
      <tr>
      <td>2</td>
        <td>Język angielski 2a</td>
        <td></td>
        <td>Język angielski 1a</td>
        <td>Język angielski 1b</td>
        <td></td>
      </tr>
      <tr>
        <td>3</td>
        <td>Język angielski 1a</td>
        <td></td>
        <td>Język angielski 1b</td>
        <td>Język angielski 2a</td>
        <td>Język angielski 1b</td>
      </tr>
      <tr>
        <td>4</td>
        <td>Język angielski 1b</td>
        <td>Język angielski 1a</td>
        <td></td>
        <td></td>
        <td>Język angielski 2a</td>
      </tr>
      <tr>
        <td>5</td>
        <td></td>
        <td>Język angielski 2a</td>
        <td>Język angielski 2b</td>
        <td>Język angielski 2b</td>
        <td>Język angielski 1a</td>
      </tr>
      <tr>
        <td>6</td>
        <td></td>
        <td>Język angielski 1b</td>
        <td>Język angielski 2a</td>
        <td></td>
        <td>Język angielski 2b</td>
      </tr>
      <tr>
        <td>7</td>
        <td></td>
        <td>Język angielski 2b</td>
        <td></td>
        <td></td>
        <td></td>
      </tr>
      <tr>
        <td>8</td>
        <td></td>
        <td></td>
        <td>Język angielski dodatkowy</td>
        <td></td>
        <td></td>
      </tr>
    </tbody>
      </table>
    </main>
    </div>
  )
}

export default Plan;
