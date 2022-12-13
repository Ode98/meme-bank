import React from 'react'
import { useState } from 'react'
import userService from '../services/user'

const CreateUserForm = () => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = async (event) => {
    event.preventDefault()
    try {
      await userService.create({
        username,
        password,
      })
      setUsername('')
      setPassword('')
    } catch (exception) {
      console.log(exception)
    }
  }

  return (
    <div>
      <div className="CreateUserForm">
        <h2>Create a new user</h2>
        <form onSubmit={handleSubmit}>
          <div>
            <label>Username</label>
            <input
              id="newUsername"
              type="text"
              value={username}
              name="Username"
              onChange={({ target }) => setUsername(target.value)}
            />
          </div>
          <div>
            <label>Password</label>
            <input
              id="newPassword"
              type="password"
              value={password}
              name="Password"
              onChange={({ target }) => setPassword(target.value)}
            />
          </div>
          <button type="submit">Create User</button>
        </form>
      </div>
    </div>
  )
}

export default CreateUserForm
