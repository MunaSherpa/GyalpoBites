import React from 'react'
import './Login.css'


const login = () => {
  return (
    <>
      <div class="container forms">
          <div class="form login">
              <div class="form-content">
                  

                  <form action="#">
                  <header>Login</header>
                      <div class="field input-field">
                          <input type="email" placeholder="Email" class="Email"/>
                      </div>

                      <div class="field input-field">
                          <input type="Password" placeholder="Password" class="Password"/>
                          <i class='bx bx-hide eye-icon'></i>
                      </div>

                      <div class="field button-field">
                          <button>Login</button>
                      </div>

                      <div class="form-link">
                            <span>Don't have an account ? <a href="/signup" class="signup-link">Signup</a></span>
                      </div>
                  </form>
              </div>
          </div>
      </div>
    </>
  )
}

export default login