import React from 'react'
import
 {BsFillBellFill, BsFillEnvelopeFill, BsPersonCircle, BsSearch, BsJustify}
 from 'react-icons/bs'


function Header() {

    const fetchData = async () => {
        setLoading(true);
        try {
            const response = await fetch(`https://localhost:32770/api/Users/PasswordValidation/${email}/${password}`);

            setStatusCode(response.status);
            const responseText = await response.text();

            if (response.ok && responseText == "true") {
                Cookies.set('user', `${email}`, { expires: 1 });
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

    return (
    <header className='header'>
        <p>Zalogowano jako [...]</p>
    </header>
    )
}

export default Header