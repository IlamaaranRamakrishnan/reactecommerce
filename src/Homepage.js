import { useNavigate } from "react-router-dom";
import styles from "./Homepage.module.css"


const Homepage = () => {

    //to navigate to another page
    let navigate = useNavigate()
    const navigations = () => {
        navigate("/Login")
    }

    return <div className={styles.backgroundSettings}>
        <div className={styles.setBordering}>
            <h1 className={styles.editText}>Welcome to our shopping cart</h1>
            <button onClick={() => { navigations() }} className={styles.Buttons}>Login</button>
        </div>

    </div>
}

export default Homepage;