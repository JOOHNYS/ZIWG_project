import { useState } from 'react'
import React from 'react'
import './App.css'
import Login from './Login'
import Dashboard from './Dashboard'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Grades from './Grades'
import Presence from './Presence'
import Plan from './Plan'

function App() {
  const [loggedIn, setLoggedIn] = useState(false)
  const [email, setEmail] = useState('')

  return (
    <Router>
      <Routes>
        <Route index element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/grades" element={<Grades />} />
        <Route path='/presence' element={<Presence />} />
        <Route path='/plan' element={<Plan />} />
      </Routes>
    </Router>
      
  )
};

export default App