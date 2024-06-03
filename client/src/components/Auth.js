import React, { useState } from 'react'

function Auth() {
  const [isLogin , setIsLogin]=useState(true)
  const [error , setError]=useState(null)

  
  const viewLogin = (status)=>{
    setError(null)
    setIsLogin(status)
  }

  return (
    <div className='auth-container'>
      <div className='auth-container-box'>
        <form>
          <h2>{isLogin ? 'Login to your account':'Create an account'}</h2>
          <input type='email' placeholder='email'/>
          <input type='password' placeholder='password'/>
          {!isLogin && <input type='password' placeholder='confirm password'/>}
          <input type='submit' className='create'/>
          {error && <p>{error}</p>}
        </form>
      
      <div className='auth-options'>
        <button onClick={()=>viewLogin(false)} style={{backgroundColor: isLogin?'rgb(255,255,255)':'rgb(188,188,188)'}}>
          Sign Up
          
        </button>

        <button onClick={()=>viewLogin(true)} style={{backgroundColor: !isLogin?'rgb(255,255,255)':'rgb(188,188,188)'}}>
          Login
        </button>

      </div>
      </div>
    </div>
  )
}

export default Auth
