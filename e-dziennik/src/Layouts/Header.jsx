import React from 'react'
import {BsFillBellFill, BsFillEnvelopeFill, BsPersonCircle, BsSearch, BsJustify} from 'react-icons/bs'
import Cookies from 'js-cookie';

function Header() {

    const fetchData = async () => {
        setLoading(true);
        try {

            const response = await fetch(`https://localhost:32768/api/Users/UserData/${Cookies.get('user')}`);

            setStatusCode(response.status);
            const responseText = await response.text();

            if (response.ok) {
                // TODO PARSOWANIE ODPOWIEDZI
            }

		} catch (error) {
            alert("Brak połączenia z backendem");
		    console.error("Error during fetch:", error);
		    setLoggedIn(false);
		} finally {
		    setLoading(false);
		}
    };

    return (
    <header className='header'>
        <p>Zalogowano jako [...]</p>
    </header>
    )
}

export default Header