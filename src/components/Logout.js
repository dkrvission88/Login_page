import React from 'react'
import { useDispatch,useSelector } from 'react-redux'
import {  selectUser } from "../features/userSlice"
import "../components/Logout.js"
import "./Logout.css"

const Logout = () => {

    const user=useSelector(selectUser)
    const dispatch=useDispatch()
    const handleLogout=(e)=>{
        e.preventDefault();

        
        dispatch(Logout())
    };



  return (
    <div>
      <h1 >
        Hi !<span className='userName'>{user.name}</span> 
         
         </h1>
         <button className='logoutBtn' onClick={(e)=>handleLogout(e)}>Logout</button>
 

    </div>
  )
}

export default Logout