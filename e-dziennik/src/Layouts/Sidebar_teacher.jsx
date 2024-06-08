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
            <Link to='../dashboard'>
            <li className='sidebar-list-item'>
                    <BsHouse className='icon'/> Kokpit   
            </li>
            </Link>
            <Link to="../grades">
                <li className='sidebar-list-item'>
                    <BsMortarboard className='icon'/> Oceny
                </li>
            </Link>
            <Link to="../presence">
            <li className='sidebar-list-item'>
                    <BsPeople className='icon'/> Obecność
            </li>
            </Link>
            <Link to="../plan">
            <li className='sidebar-list-item'>
                    <BsCalendar3 className='icon'/> Plan lekcji
            </li>
            </Link>
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