import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
//import Heading from "./Heading";
import styles from "./Shoppingcart.module.css"

const Shoppingcart = () => {

    //to display cart items
    const [cartitem, setCartItems] = useState([])

    // to split price alone
    const [price, setPrice] = useState('')

    useEffect(() => {
        const cartData = JSON.parse(localStorage.getItem('cart'))
       // console.log(cartData)
        setCartItems(cartData)
    }, []);

    const mappings = cartitem.map((items) => {
        return <tr key={items.id}>
            <td className={styles.tableEdits2}>{items.title}</td>
            <td className={styles.tableEdits2}>{items.description}</td>
            <td className={styles.tableEdits2}> <img src={items.thumbnail} alt="images" className={styles.imageEdit}></img></td>
            <td className={styles.tableEdits2}>{items.price}</td>
        </tr>
    })

    // to add pricing
    useEffect(() => {
        const priceSplit = cartitem.map((items) => {
            return items.price
        })

        let sum = 0
        priceSplit.forEach((score) =>
            sum += score
        )
        setPrice(sum)
    }, [price])




    // console.log(priceSplit)



    return <div>

        <Link to="/shopping" className={styles.ChangeText}>Back to list</Link>
        <div className={styles.mainDivs}>
            <h1>Cart</h1>
            <table className={styles.tableEdits}>
                <tbody >
                    <tr >
                        <th className={styles.tableEdits2}>Product Name</th>
                        <th className={styles.tableEdits2}>Product Description</th>
                        <th className={styles.tableEdits2}>Product Image</th>
                        <th className={styles.tableEdits2}>Product Price</th>
                    </tr>
                    {mappings}
                </tbody>
            </table>
            <h3 className={styles.EditH3}>Total:{price}</h3>
        </div>


    </div>
}

export default Shoppingcart;