import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ReactPaginate from "react-paginate";

import styles from './Shopping.module.css'
import Heading from "./Heading";




const Shopping = () => {

    //to display list of products
    const [information, setInformation] = useState([]);

    //pagination workflow
    const [pageNumber, setPageNumber] = useState(0);

    //for search function
    const [query, setQuery] = useState("");

    const findings = (event) => {
        setQuery(event.target.value.toLowerCase())
        // console.log(query)
    }


    //sort by price
    const sorting = () => {
        console.log('test')
        //setCompare(false)
        const Sortedout = (information.sort((a, b) => a.price - b.price))
        console.log(Sortedout)

        setInformation(items => [...Sortedout])

    }

    //sort by rating
    const sorting2 = () => {
        console.log('test2')
        //setCompare(false)
        const Sortedout = (information.sort((a, b) => b.rating - a.rating))
        console.log(Sortedout)

        setInformation(items => [...Sortedout])

    }

    //reset to default
    const sorting3 = () => {
        console.log('test2')
        //setCompare(false)
        const Sortedout = (information.sort((a, b) => a.id - b.id))
        console.log(Sortedout)

        setInformation(items => [...Sortedout])

    }


    //how many users per page
    const usersPerPage = 10;

    //store pages visited
    const pagesVisited = pageNumber * usersPerPage;

    const Displayusers = information
        .slice(pagesVisited, pagesVisited + usersPerPage)
        .filter(items => items.title.toLowerCase().includes(query) || items.category.toLowerCase().includes(query))
        .map((items) => {
            return <ul key={items.id} className={styles.EditProducts}>
                <li className={styles.editList}>
                    <p className={styles.pEdit}>Category : {items.category}</p>
                    <p>Name : {items.title}</p>
                    <p>Price : RM{items.price}</p>
                    <p>Rating : {items.rating}/5</p>
                    <img src={items.thumbnail} alt="images" className={styles.imageEdit}></img>
                    <Link to={"/item/" + items.id}  className={styles.changeLinkDesign}>Click for more info</Link>
                </li>
            </ul>
        });


    // produce only 10 per pagination
    const pageCount = Math.ceil(information.length / usersPerPage);

    const changePage = ({ selected }) => {
        setPageNumber(selected)
    }

    useEffect(() => {
        fetch('https://dummyjson.com/products')
            .then(res => res.json())
            .then(data => {
                // console.log(data.products)
                setInformation(data.products)

            });
    }, [])

    return <div className={styles.mainDiv} >

        <Heading />
        <h2 className={styles.h2Edit}>Please browse through our products</h2>
        <input type="text" placeholder="Search..." onChange={findings} className={styles.textInput}></input>
        <div className={styles.buttonControl}>
            <button onClick={() => { sorting() }} className={styles.buttonSubmit}>Sort by price</button>
            <button onClick={() => { sorting2() }} className={styles.buttonSubmit}>Sort by rating</button>
            <button onClick={() => { sorting3() }} className={styles.buttonSubmit}>Reset</button>
        </div>

        <div>
            {Displayusers}
        </div>
        <ReactPaginate
            previousLabel={"Previous"}
            nextLabel={"Next"}
            pageCount={pageCount}
            onPageChange={changePage}
            containerClassName={styles.paginationButtons}
            previousLinkClassName={"previousButton"}
            nextLinkClassName={"nextButton"}
            disabledClassName={"paginationDisabled"}
            activeClassName={styles.paginationActive}

        />



    </div>
}

export default Shopping;