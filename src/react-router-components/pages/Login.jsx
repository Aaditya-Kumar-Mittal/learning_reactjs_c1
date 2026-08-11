import React from 'react'
import { Link } from 'react-router'

function Login() {
  return (
    <div>
      <h1>Login</h1>
      <Link to="/register">Register Now!</Link> | <Link to="/home"> Go Back To Home</Link>
    </div>
  )
}

export default Login