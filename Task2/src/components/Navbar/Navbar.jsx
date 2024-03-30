import React,{ useContext } from 'react'
import './navbar.css'
import logo from '../../assets/images/freepost.png'
import { Link } from 'react-router-dom'
import { LoginContext } from "../../context/LoginContext";


const Navbar = () => {

  const { setModalOpen } = useContext(LoginContext);

  const loginStatus=()=>{
    const token=localStorage.getItem("jwt")
    if(token)
    {
      return[
        <>
                <Link to='/createPost'><li>Create Post</li></Link>
                <Link to={""}>
                  <button className='primaryBtn'  onClick={() => setModalOpen(true)}>Log Out</button>
                </Link>

        </>
      ]
    }
    else{
      return [
        <>
        <Link to='/signin'><li>Sign In</li></Link>
        <Link to='/signup'><li>Sign Up</li></Link>
        </>
      ]
    }
  }
  return (
    <div className='navbar'>
      <Link to='/'><img src={logo} alt='logo'/></Link>
      <ul className='navbar-menu'>
        {loginStatus()}

      </ul>
    </div>
  )
}

export default Navbar
