import React, { useState } from 'react';
import { Navigate } from 'react-router-dom';
import Sidebar_clear from './Layouts/Sidebar_clear';
import './App.css';
import Button from './components/Button';
import Dashboard from './Dashboard';

function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loggedIn, setLoggedIn] = useState(false);

    const handleLogin = (e) => {
        e.preventDefault();
        // Your login logic here
        setLoggedIn(true);
    };

    if (loggedIn) {
        // Redirect to dashboard if logged in
        return <Navigate to="/dashboard" />;
    }

    return (
        <div className='grid-container'>
            <Sidebar_clear />
            <div className='main-container'>
                <div className='form'>
                    <h1 className='login-title'>Zaloguj się</h1>
                    <h2 className="info-title">Proszę wpisać adres e-mail oraz hasło</h2>
                    <div className='login-input'>
                        <label htmlFor="email">Email</label><br/>
                        <input type="email" name="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                    </div>
                    <div className='login-input'>
                        <label htmlFor="passw">Hasło</label><br/>
                        <input type="password" name="passw" id="passw" value={password} onChange={(e) => setPassword(e.target.value)} />
                    </div>
                    <Button onClickFunction={handleLogin} buttonText="Zaloguj" addArrow="true" />
                </div>
                <img className="children" src="/children.svg" alt="Children" />
            </div>
        </div>
    )
}

export default Login;
