import { Outlet, Navigate } from "react-router-dom";
import { useState, useEffect } from "react";
import Cookies from "universal-cookie";

const PrivateRoutes = () =>{


    //check true or false state
    const [ users, setUsers] = useState(true)

    //get cookie and check if exist
    const cookies = new Cookies()
    cookies.get('jwt_autorization')
    const testing = cookies.get('jwt_autorization')
   // console.log( testing,'from cookies')
  
  


 // usestate logic to turn true or false
    useEffect(() => {
        if(testing === undefined){
            setUsers(false)
          //  console.log(users)
        }
      
    }, [testing])

    return(
        users ? <Outlet/> : <Navigate to="/login" />
        
    )
}

export default PrivateRoutes;