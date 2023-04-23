import { useParams } from "react-router-dom"
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

import Heading from "./Heading";

import styles from "./Singlepage.module.css"


const Singlepage = () => {


    //extract id from url
    const { productid } = useParams();

    //store retrieved data
    const [getSingleData, SetGetSingleData] = useState([])

    // add item to state
    //call local storage to load previous saved itemsAdded value
    const [itemsAdded, setItemsAdded] = useState(() => {
        return JSON.parse(localStorage.getItem('cart')) || []
    })


    useEffect(() => {
        fetch('https://dummyjson.com/products')
            .then(res => res.json())
            .then(data => {
                //      console.log(data.products)
                SetGetSingleData(data.products)
            });

    }, [])


    //function to add previous and current state items
    const addItems = () => {
        const finalItem = getSingleData.find(items => items.id === parseInt(productid))
        //  console.log(finalItem,'final item')
        // setItemsAdded(finalItem)
        setItemsAdded(itemsAdded => ([...itemsAdded, finalItem]))
    }

    useEffect(() => {
        localStorage.setItem('cart', JSON.stringify(itemsAdded));
    }, [itemsAdded]);

    // console.log(itemsAdded,'added items')




    //filter and return item compared with the id passed in url
    const filtering = getSingleData
        .filter(items => items.id === parseInt(productid))
        .map((items) => {
            return <ul key={items.id} className={styles.EditProducts}>
                <li className={styles.editList}>
                    <p className={styles.pEdit}>Name: {items.title}</p>
                    <p>Price: RM{items.price}</p>
                    <p>Stock: {items.stock}</p>
                    <p>Description:{items.description}</p>
                    <img src={items.thumbnail} alt="images" className={styles.imageEdit}></img>
                    <button onClick={() => { addItems() }} className={styles.changeLinkDesign}>Click to add cart</button>
                </li>


            </ul>
        })

    //  console.log(filtering)


    return <div>
        <div className={styles.ChangingHeader}>
            <Link to="/shopping" className={styles.ChangeText}>Back to list</Link>
            <Heading />
        </div>

        <h1 className={styles.h1Edit}>Product Details:{productid}</h1>
        {filtering}
        




    </div>
}

export default Singlepage