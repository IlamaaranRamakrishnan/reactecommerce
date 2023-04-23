import { useEffect, useState } from "react";
import Cookies from "universal-cookie";
import { useNavigate } from "react-router-dom";

import styles from "./Login.module.css"
import { ReactComponent as Logins } from "./images/logins.svg"


const Login = () => {

const cookies = new Cookies();
let changePage = useNavigate()


    const [userName, setUserName] = useState('');
    const [password, setUserPassword] = useState('');

    // to store cookie 

    const [getCookies, setGetCookies] = useState('')


    //to capture username
    const inputDetails = (event) => {
        setUserName(event.target.value)
    }


    //to capture password
    const inputPassword = (event) => {
        setUserPassword(event.target.value)
    }

    //prevent form submission to backend and call fetch API
    const formSubmitHandler = (event) => {
        event.preventDefault();

        fetch('https://dummyjson.com/auth/login', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
              
              username: `${userName}`,
              password: `${password}`,
              // expiresInMins: 60, // optional
            })
          })
          .then(res => res.json())
          .then(data =>{
            
            setGetCookies(data.token)
            console.log(data)
            
          });
    }

    useEffect(() => {
        if (getCookies === '') {
            return
        }
            cookies.set("jwt_autorization", getCookies, [])
            changePage('/shopping')

        // console.log(storedData)
    }, [getCookies])


  


    return <div className={styles.mainDivs}>
        <h1>Welcome!</h1>
        <Logins/>
        <p className={styles.textColour}>Sign below</p>
        <form onSubmit={formSubmitHandler}>
            <label className={styles.textLabel}>Username</label>
            <br />
            <input type="text" onChange={inputDetails} required  className={styles.textInput}></input>
            <br />
            <label className={styles.textLabel}>Password</label>
            <br/>
            <input type="password" onChange={inputPassword} required className={styles.textInput}></input>
            <br/>
            <button type="submit" className={styles.buttonSubmit}>SIGN IN</button>
        </form>
    </div>
}

export default Login;