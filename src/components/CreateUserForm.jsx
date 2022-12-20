import React from 'react'
import { useState } from 'react'
import userService from '../services/user'

const CreateUserForm = ({ setCreateUserFormVisible }) => {
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
      setCreateUserFormVisible(false)
    } catch (exception) {
      console.log(exception)
    }
  }

  return (
    <div className="create-user-form">
      <b>Luo uusi käyttäjä</b>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Käyttäjätunnus</label>
          <input
            id="newUsername"
            type="text"
            value={username}
            name="Username"
            onChange={({ target }) => setUsername(target.value)}
          />
        </div>
        <div>
          <label>Salasana</label>
          <input
            id="newPassword"
            type="password"
            value={password}
            name="Password"
            onChange={({ target }) => setPassword(target.value)}
          />
        </div>
        <button type="submit">Rekisteröidy</button>
      </form>
    </div>
  )
}

export default CreateUserForm
