import React from 'react'
import {BsHouse, BsMortarboard, BsPeople, BsCalendar3, BsBoxArrowLeft } from 'react-icons/bs'
import { Link } from 'react-router-dom';

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
        <Link to='/'>
            <div className='sidebar-list-item sidebar-logout'>
                <BsBoxArrowLeft className='icon'/> Wyloguj
            </div>
        </Link>
    </aside>
  )
}

export default Sidebar_teacher