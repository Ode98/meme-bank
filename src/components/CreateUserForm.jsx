import React from "react";
import { useState } from "react";
import userService from "../services/user";

const CreateUserForm = ({
  setCreateUserFormVisible,
  setNotificationMessage,
}) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await userService.create({
        username,
        password,
      });
      setNotificationMessage(`Käyttäjä ${username} luotiin onnistuneesti`);
      setUsername("");
      setPassword("");

      setCreateUserFormVisible(false);
    } catch (exception) {
      if (exception.response.status === 400) {
        setNotificationMessage("Salasanan tulee olla vähintään 5 merkkiä");
      } else if (exception.response.status === 409) {
        setNotificationMessage("Käyttäjätunnus on jo käytössä");
      } else {
        setNotificationMessage("Tapahtui virhe");
      }
    }
  };

  return (
    <>
      <b>Luo uusi käyttäjä</b>
      <form className="create-user-form" onSubmit={handleSubmit}>
        <label>Käyttäjätunnus</label>
        <input
          id="newUsername"
          type="text"
          value={username}
          name="Username"
          onChange={({ target }) => setUsername(target.value)}
        />
        <label>Salasana</label>
        <input
          id="newPassword"
          type="password"
          value={password}
          name="Password"
          onChange={({ target }) => setPassword(target.value)}
        />
        <button type="submit">Rekisteröidy</button>
      </form>
    </>
  );
};

export default CreateUserForm;
