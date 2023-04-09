import './Login.css'
import React, { useState } from 'react'
import Axios from 'axios'



const Login = () => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    console.log(email);
    const [loginStat, setLoginStat] = useState("");

    const login = (e) =>{
        e.preventDefault();

        Axios.post("http://localhost:3001/login",{
            email: email,
            password: password,
        }).then((response)=>{
            setLoginStat(response.data);
            console.log(response.statusText)

        })

    }

  return (
    <>
      <div class="container forms">
          <div class="form login">
              <div class="form-content">
                  

                  <form action="#">
                  <header>Login</header>
                      <div class="field input-field">
                          <input type="email" placeholder="Email" class="Email" onChange={(e)=> {setEmail(e.target.value)}}/>
                      </div>

                      <div class="field input-field">
                          <input type="Password" placeholder="Password" class="Password" onChange={(e)=> {setPassword(e.target.value)}}/>
                          <i class='bx bx-hide eye-icon'></i>
                      </div>

                      <div class="field button-field">
                          <button  onClick={login}>Login</button>
                          {/* <input className='login-btn' type='button' onClick={login} value='Login' /> */}
                      </div>

                      <div class="form-link">
                            <span>Don't have an account ? <a href="/signup" class="signup-link">Signup</a></span>
                      </div>
                      <h1>{loginStat}</h1>
                  </form>
              </div>
          </div>
      </div>
    </>
  )
}

export default Login