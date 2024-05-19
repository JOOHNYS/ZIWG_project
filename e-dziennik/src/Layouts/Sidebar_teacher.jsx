import React from 'react'
import {BsHouse, BsMortarboard, BsPeople, BsCalendar3, BsBoxArrowLeft } from 'react-icons/bs'
import Login from '../Login'

function Sidebar_teacher() {
  return (
    <aside id='sidebar'>
        <div className='sidebar-title'>
            <div className='sidebar-brand'>
                e-Dziennik
            </div>
            <span className='icon close_icon'>X</span>
        </div>
        <ul className='sidebar-list'>
            <li className='sidebar-list-item'>
                <a href=''>
                    <BsHouse className='icon'/> Kokpit
                </a>
            </li>
            <li className='sidebar-list-item'>
                <a href=''>
                    <BsMortarboard className='icon'/> Oceny
                </a>
            </li>
            <li className='sidebar-list-item'>
                <a href=''>
                    <BsPeople className='icon'/> Obecność
                </a>
            </li>
            <li className='sidebar-list-item'>
                <a href=''>
                    <BsCalendar3 className='icon'/> Plan lekcji
                </a>
            </li>
        </ul>
        <div className='sidebar-list-item sidebar-logout'>
        <a href='../Login'>
            <BsBoxArrowLeft className='icon' /> Wyloguj
        </a>
        </div>
    </aside>
  )
}

export default Sidebar_teacher