 import React, { useState } from 'react'
 import "./Signup.css"
 import Axios from "axios";
 
 
 const Signup = () => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    console.log(email);
    // const [loginStat, setLoginStat] = useState("");
    const [registerStat, setSignUpStat] = useState("");

    const signUp = (e) =>{
        e.preventDefault();

        Axios.post("http://localhost:3001/signup",{
            email: email,
            password: password,
        }).then((response)=>{

            setSignUpStat(response.data);

            console.log(response.data)
        })

    }



   return (
    <>
    <div class="container forms">
        <div class="form signup">
            <div class="form-content">
                

                <form method='get'>
                <header>Signup</header>
                    <div class="field input-field">
                        <input type="email" placeholder="Email" class="Email" onChange={(e)=> {setEmail(e.target.value)}}/>
                    </div>

                    <div class="field input-field">
                        <input type="Password" placeholder=" Create Password" class="Password"onChange={(e)=> {setPassword(e.target.value)}}/>
                        
                    </div>

                    <div class="field input-field">
                        <input type="Password" placeholder=" Confirm Password" class="Password"onChange={(e)=> {setPassword(e.target.value)}}/>
                       
                    </div>

                    <div class="field button-field">
                        <button  onClick={signUp}>Sign Up</button>

                        {/* <button type='submit' onClick={signUp}>Signup</button> */}
                        {/* <input type='submit' onClick={signUp} value="Sign up" /> */}

                    </div>

                    <div class="form-link">
                          <span>Already have an account ? <a href="/login" class="signup-link">Login</a></span>
                    </div>
                    <h1>{registerStat}</h1>
                </form>
            </div>
        </div>
    </div>
  </>
)
   
 }
 
 export default Signup