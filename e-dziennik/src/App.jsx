import { useState } from 'react'
import React from 'react'
import './App.css'
import Login from './Login'
import Dashboard from './Dashboard'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {
  const [loggedIn, setLoggedIn] = useState(false)
  const [email, setEmail] = useState('')

  return (
    <Router>
      <Switch>
        <Route path="/login" component={Login} />
        <Route path="/dashboard" component={Dashboard} />
      </Switch>
      </Router>
      
  )
};

export default App
