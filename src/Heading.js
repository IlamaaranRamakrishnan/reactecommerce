import { Link } from "react-router-dom";
import { ReactComponent as Cart } from "./images/cart.svg"
import styles from "./Heading.module.css"

const Heading = () =>{

    return <div className={styles.bordering}>
        <Link to="/shoppingcart" className={styles.test}> <Cart></Cart></Link>
    </div>
}

export default Heading;