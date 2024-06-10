import React from 'react'
import {BsFillBellFill, BsFillEnvelopeFill, BsPersonCircle, BsSearch, BsJustify} from 'react-icons/bs'
import Cookies from 'js-cookie';

function Header() {
    const apiUrl = import.meta.env.VITE_API_URL;

    const fetchData = async () => {
        try {
            const response = await fetch(`${apiUrl}/Users/UserData/${Cookies.get('user')}`);

            const responseJson = await response.json();

            if (response.ok) {
                console.log(responseJson);
                console.log(responseJson.accountType);
                console.log(responseJson.name);

                Cookies.set('accountType', `${responseJson.accountType}`, { expires: 1 });
            }

        } catch (error) {
            alert("Brak połączenia z backendem");
            console.error("Error during fetch:", error);
        } finally {
        }
    }

    fetchData();

    return (
    <header className='header'>
        <p>Zalogowano jako {Cookies.get('accountType')}</p>
    </header>
    )
}

export default Header