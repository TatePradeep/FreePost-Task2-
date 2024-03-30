import React,{useState,useContext} from 'react'
import './signin.css'
import logo from '../../assets/images/signin.png'
import { Link,useNavigate } from 'react-router-dom'
import {toast} from "react-toastify"
import { LoginContext } from "../../context/LoginContext";



const Signin = () => {
  const { setUserLogin } = useContext(LoginContext)

  const navigate=useNavigate()

  const [email,setEmail]=useState("");
  const [password,setPassword]=useState("");

  const notify=(msg)=>toast.error(msg)
const notify1=(msg)=>toast.success(msg)

  const emailRegex=/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
const passRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/;

  const postData=()=>{
    if(!emailRegex.test(email))
    {
    notify("Invalid Email")
    return
    }
    else if(!passRegex.test(password)){
    notify("Password must contain at least eight characters,including at least one number and one includes both lower and uppercase letters and special characters for example #,@,?,!")
    return
    }
    
      fetch("http://localhost:5000/signin",{
        method:"post",
        headers:{
          "Content-Type":"application/json"
        },
        body:JSON.stringify({
         
         email:email,
         password:password
        })
      }).then(res=>res.json())
      .then(data=>{
        if(data.error){
          notify(data.error)
        }
        else{
          notify1("Signed In Successfully")
          localStorage.setItem("jwt",data)
          setUserLogin(true)
          navigate('/')
        } console.log(data)})
    }


  return (
    <div className='signin'>
      <div>
        <div className='loginForm'>
          <img className='sign-in-logo' src={logo} alt='logo'/>
          <div>
          <input type='email' name='email' id='email' value={email} placeholder='Email' onChange={(e)=>{setEmail(e.target.value)}}/>
          </div>
          <div>
          <input type='password' name='password' id='password' value={password} placeholder='Password' onChange={(e)=>{setPassword(e.target.value)}}/>
          </div>
          <input type='submit' id='login-btn' value="Sign In" onClick={()=>{postData()}}/>
          <div className='loginForm2'>
            Don't have an account?
            <Link to='/signup'><span>Sign Up</span></Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Signin
