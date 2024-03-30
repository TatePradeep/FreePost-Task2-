import React,{useEffect} from 'react'
import './home.css'
import profile from '../../assets/images/profile.png'
import { useNavigate } from 'react-router-dom'


const Home = () => {

  const navigate=useNavigate();
useEffect(()=>{
  const token =localStorage.getItem("jwt")

  if(!token)
  {
navigate('/signin')
  }
},[])

  return (
    <>
    <div className='home'>
      <div className='card'>
        <div className="card-header">
          <div className="card-pic">
            <img src={profile}/>
          </div>
          <h5>User</h5>
        </div>


        <div className="card-image">
          <img src='https://wallpapercave.com/wp/wp4221519.jpg'/>
        </div>


        <div className="card-content">
        <span className="material-symbols-outlined">favorite</span>
        <p>1 Like</p>
        <b><p>Made like a gun, goes like a bullet</p></b>
        </div>

        <div className="add-comment">
        <span className="material-symbols-outlined">sentiment_satisfied</span>
        <input type='text' placeholder='Add a comment'/>
        <button className='comment'>Post</button>
        </div>
      </div>
    </div>

    <div className='card'>
    <div className="card-header">
      <div className="card-pic">
        <img src={profile}/>
      </div>
      <h5>User</h5>
    </div>


    <div className="card-image">
      <img src='https://media.istockphoto.com/id/1255328634/photo/cricket-leather-ball-resting-on-bat-on-the-stadium-pitch.jpg?s=612x612&w=0&k=20&c=e2yHkZt3DISv6e1dpkZgABgC9fxfY93cB1H4MdY9sJs='/>
    </div>


    <div className="card-content">
    <span className="material-symbols-outlined">favorite</span>
    <p>4 Likes</p>
    <b><p>Cricket brings me joy </p></b>
    </div>

    <div className="add-comment">
    <span className="material-symbols-outlined">sentiment_satisfied</span>
    <input type='text' placeholder='Add a comment'/>
    <button className='comment'>Post</button>
    </div>
  </div>

  <div className='card'>
    <div className="card-header">
      <div className="card-pic">
        <img src={profile}/>
      </div>
      <h5>User</h5>
    </div>


    <div className="card-image">
      <img src='https://t4.ftcdn.net/jpg/03/10/00/33/360_F_310003386_Ad9DSeB96ph6F6IizSv2SDUvDYfpkcQk.jpg'/>
    </div>


    <div className="card-content">
    <span className="material-symbols-outlined">favorite</span>
    <p>5 Likes</p>
    <b><p>Sky above earth below, peace within </p></b>
    </div>

    <div className="add-comment">
    <span className="material-symbols-outlined">sentiment_satisfied</span>
    <input type='text' placeholder='Add a comment'/>
    <button className='comment'>Post</button>
    </div>
  </div>
  </>
  )
}

export default Home
