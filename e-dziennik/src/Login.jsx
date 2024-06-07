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

    const [statusCode, setStatusCode] = useState(null);
	const [loading, setLoading] = useState(true);
	const [data, setData] = useState(null);
	const [dataInput, setDataInput]=useState("");
	const [loginAttempt, setLoginAttempt] = useState(false);

	const [status, setStatus] = useState(null);
  	const [error, setError] = useState(null);

    const fetchData = async () => {
        setLoading(true);
        try {
            const response = await fetch(`https://localhost:32770/api/Users/PasswordValidation/${email}/${password}`);

            setStatusCode(response.status);
            const responseText = await response.text();

            if (response.ok && responseText == "true") {
                setLoggedIn(true);
            } else {
                alert("Błędne dane logowania");
            }

		} catch (error) {
		    console.error("Error during fetch:", error);
		    setLoggedIn(false);
		} finally {
		    setLoading(false);
		}
    };

    const handleLogin = (e) => {
		e.preventDefault();
		setLoginAttempt(true);
		fetchData();
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
                    <Button onClickFunction={handleLogin} buttonText="Zaloguj" addArrow />
                </div>
                <img className="children" src="/children.svg" alt="Children" />
            </div>
        </div>
    )
}

export default Login;
