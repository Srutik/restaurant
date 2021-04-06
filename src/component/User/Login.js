import React,{useState} from "react";
import PropTypes from 'prop-types';
import loginImg from '../login.svg';
import {useHistory} from 'react-router-dom';
import LoginNav from '../Login-navbar';
import { Link } from 'react-router-dom';
import "../Login.scss";

 function Login() {

  const [email, setUserName] = useState();
  const [password, setPassword] = useState();
  const history = useHistory();

  async function login() {
    let data={email,password}
    console.log(data)
  
    
    try {
    let result = await fetch("http://192.168.0.63:8020/home/login" , {
      method:'POST',
      headers:{
        "Content-Type":'application/json; charset=UTF-8', 
        "Accept":'application/json'
      },
      body:JSON.stringify(data),
    })
   result = await result.json()
   localStorage.setItem("user-info", JSON.stringify(result)) 
   history.push("/UserHome")
  }catch (error) {
    alert("Your Email and Password Doesn't match !")
  }
   }

    return (
      <div>
        <LoginNav />
      <div className="base-container" >
        <div className="header">Login</div>
        <div className="content">
          <div className="image">
            <img src={loginImg} alt={1} />
          </div>
          <div className="form">
            <div className="form-group">
              <label htmlFor="username">Username</label>
              <input type="text" name="email"  placeholder="username" onChange={e => setUserName(e.target.value)} />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input type="password" name="password" placeholder="password" onChange={e => setPassword(e.target.value)} />
            </div>
          </div>
        </div>
        <div className="footer">
          <button type="button" onClick={login} className="btns">
            Login
          </button>
          
        </div> 

        <Link to='/forgot' className='admin'>
            Forgot Password
        </Link>

        <div className="footer">
            Don't Have an Account ? 
        <Link to='/sign-up' className='link'>
            sign up
        </Link>
        </div> 
      </div>
      </div>
    );
  }

  Login.propTypes = {
    setToken: PropTypes.func.isRequired
  }

  export default Login;