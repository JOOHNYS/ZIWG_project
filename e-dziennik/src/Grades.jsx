import { useState, } from 'react'
import './App.css'
import Header from './Layouts/Header'
import Home from './Layouts/Home'
import Cookies from 'js-cookie';
import Sidebar_teacher from './Layouts/Sidebar_teacher'
import Grades_teacher from './Layouts/Grades_teacher'
import Grades_student from './Layouts/Grades_student'

function Grades() {

  return (
    <div className='grid-container'>
    <Header />
    <Sidebar_teacher />
    {Cookies.get('accountType') == 'nauczyciel' ? <Grades_teacher /> : <Grades_student />}
    </div>
  )
}

export default Grades;
