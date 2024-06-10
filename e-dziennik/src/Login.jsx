import React, { useState } from 'react';
import { Navigate } from 'react-router-dom';
import Sidebar_clear from './Layouts/Sidebar_clear';
import './App.css';
import Button from './components/Button';
import Dashboard from './Dashboard';
import Cookies from 'js-cookie';

function Login() {
    const apiUrl = import.meta.env.VITE_API_URL;

    const [login, setLogin] = useState("");
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
            const response = await fetch(`${apiUrl}/Users/PasswordValidation/${login}/${password}`);

            setStatusCode(response.status);
            const responseText = await response.text();

            if (response.ok && responseText == "true") {
                Cookies.set('user', `${login}`, { expires: 1 });
                setLoggedIn(true);
            } else {
                alert("Błędne dane logowania");
            }

		} catch (error) {
            alert("Brak połączenia z backendem");
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
                        <label htmlFor="login">Login</label><br/>
                        <input type="login" name="login" id="login" value={login} onChange={(e) => setLogin(e.target.value)} />
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
