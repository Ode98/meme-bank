import React from 'react'
import { useState } from 'react'
import loginService from '../services/login'
import CreateUserForm from './CreateUserForm'
import memesService from '../services/memes'

const LoginForm = ({ setUser }) => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const handleLogin = async (event) => {
    event.preventDefault()
    try {
      const user = await loginService.login({
        username,
        password,
      })
      window.localStorage.setItem('loggedBlogappUser', JSON.stringify(user))
      setUser(user)
      memesService.setToken(user.token)
      setUsername('')
      setPassword('')
    } catch (exception) {}
  }

  return (
    <div>
      <div className="loginForm">
        <h2>Login</h2>
        <form onSubmit={handleLogin}>
          <div>
            <label>Username</label>
            <input
              id="username"
              type="text"
              value={username}
              name="Username"
              onChange={({ target }) => setUsername(target.value)}
            />
          </div>
          <div>
            <label>Password</label>
            <input
              id="password"
              type="password"
              value={password}
              name="Password"
              onChange={({ target }) => setPassword(target.value)}
            />
          </div>
          <button type="submit">Login</button>
        </form>
      </div>
      <CreateUserForm />
    </div>
  )
}

export default LoginForm
