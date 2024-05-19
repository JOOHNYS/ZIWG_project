import React,{useState} from 'react' 
import { useNavigate } from 'react-router-dom';
import { Navigate } from 'react-router-dom';
import Sidebar_clear from './Layouts/Sidebar_clear';
import './App.css'

function Login(){ 
	const [email,setEmail]=useState(""); 
	const [password,setPassword]=useState(""); 
	const[dataInput, setDataInput]=useState("");
	const [loggedIn, setLoggedIn] = useState(false);
	const users = [{ email: "teacher@mail.com", password: "teacherpass" }];

  const handleLogin = (e) => {
    e.preventDefault()
    const account = users.find((user) => user.email === email);
    if (account && account.password === password) {
        setLoggedIn(true);
	}
	};

	if (loggedIn) {
		// Redirect to dashboard if logged in
		return <Navigate to="/dashboard" />;
	}

	return(
<div className='grid-container'>
	<Sidebar_clear />
	<div className='log-form'>
		<form action="" onSubmit={handleLogin} >
			<h2 className='login-title'>Zaloguj się</h2>
			<div className='login-input'> 
				<label htmlFor="email">Email</label>
				<input type="email" name="email" id="email" value={email} onChange={(e)=>setEmail(e.target.value)}/> 
			</div> 
			<div className='login-input'> 
				<label htmlFor="passw">Hasło</label>
			<input type="password" name="passw" id="passw" value={password} onChange={(e)=>setPassword(e.target.value)}/> 
			</div>  
			<button type="submit" className='centre-button' onClick={handleLogin}>Zaloguj</button>
		</form>
	</div>
	</div>
)} 

export default Login;