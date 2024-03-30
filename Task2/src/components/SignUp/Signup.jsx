import React,{useEffect,useState} from 'react'
import './signup.css'
import logo from '../../assets/images/freepost.png'
import { Link ,useNavigate} from 'react-router-dom'
import {toast} from "react-toastify"


const Signup = () => {
const navigate=useNavigate()

const[name,setName]=useState("");
const[email,setEmail]=useState("");
const[userName,setUserName]=useState("");
const[password,setPassword]=useState("");

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

  fetch("http://localhost:5000/signup",{
    method:"post",
    headers:{
      "Content-Type":"application/json"
    },
    body:JSON.stringify({
     name:name,
     email:email,
     userName:userName,
     password:password
    })
  }).then(res=>res.json())
  .then(data=>{
    if(data.error){
      notify(data.error)
    }
    else{
      notify1(data.message)
      navigate('/signin')
    } console.log(data)})
}
  return (
    <div className='signup'>
      <div className='form-container'>
        <div className='form'>
            <img className='sign-up-logo' src={logo} alt='logo'/>
        <p className='loginPara'>Sign Up to Share Your Thoughts <br/>and Discover Inspiration </p>

          <div>
              <input type='email' name='email' id='email' value={email} placeholder='Email' onChange={(e)=>{setEmail(e.target.value)}}/>
          </div>
          <div>
              <input type='text' name='name' id='name' value={name} placeholder='Full Name' onChange={(e)=>{setName(e.target.value)}}/>
          </div>
          <div>
              <input type='text' name='username' id='username' value={userName} placeholder='Username' onChange={(e)=>{setUserName(e.target.value)}}/>
          </div>
          <div>
              <input type='password' name='password' id='password' value={password} placeholder='Password' onChange={(e)=>{setPassword(e.target.value)}}/>
          </div>
          <input type='submit' id='submit-btn' value='Sign Up' onClick={()=>{postData()}}/>

          <div className='form2'>
        Already have an accout?
        <Link to='/signin'><span>Sign In</span></Link>
        
      </div>
        </div>
      
      </div>
    </div>
  )
}

export default Signup
