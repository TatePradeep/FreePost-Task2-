import React,{ createContext } from 'react'
import Navbar from "./components/Navbar/Navbar"
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Home from './components/Home/Home'
import SignUp from './components/SignUp/Signup'
import SignIn from './components/SignIn/Signin'
import Createpost from './components/CreatePost/Createpost'
import Modal from './components/Modal/Modal'
import {ToastContainer} from "react-toastify"
import 'react-toastify/dist/ReactToastify.css';
import { useState } from "react"
import { LoginContext } from "./context/LoginContext"

function App() {

  const [userLogin, setUserLogin] = useState(false);

  const [modalOpen,setModalOpen]= useState(false);

  return (
    <BrowserRouter>
    <LoginContext.Provider value={{ setUserLogin, setModalOpen }}>
      <Navbar  login={userLogin}/>

      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/signup" element={<SignUp/>}></Route>
        <Route path="/signin" element={<SignIn/>}></Route>
        <Route path="/createPost" element={<Createpost/>}></Route>


      </Routes>
      <ToastContainer theme="dark"/>
      {modalOpen && <Modal setModalOpen={setModalOpen}></Modal>}
</LoginContext.Provider>
    </BrowserRouter>
  )
}

export default App
