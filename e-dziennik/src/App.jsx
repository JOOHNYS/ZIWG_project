import { useState } from 'react'
import React from 'react'
import './App.css'
import Login from './Login'
import Dashboard from './Dashboard'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  const [loggedIn, setLoggedIn] = useState(false)
  const [email, setEmail] = useState('')

  return (
    <Router>
      <Routes>
        <Route path="/login" component={Login} />
        <Route path="/dashboard" component={Dashboard} />
      </Routes>
    </Router>
      
  )
};

export default App