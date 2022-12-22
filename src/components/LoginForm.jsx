import React from "react";
import { useState } from "react";
import loginService from "../services/login";
import memesService from "../services/memes";

const LoginForm = ({
  setUser,
  setLoginFormVisible,
  setNotificationMessage,
}) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (event) => {
    event.preventDefault();
    try {
      const user = await loginService.login({
        username,
        password,
      });
      window.localStorage.setItem("loggedMemeAppUser", JSON.stringify(user));
      setUser(user);
      memesService.setToken(user.token);
      setUsername("");
      setPassword("");
      setNotificationMessage(`Käyttäjä ${user.username} kirjautui sisään`);
      setLoginFormVisible(false);
    } catch (exception) {
      if (exception.response.status === 401) {
        setNotificationMessage("Väärä käyttäjätunnus tai salasana");
      } else {
        setNotificationMessage("Tapahtui virhe");
      }
    }
  };

  return (
    <>
      <b>Kirjaudu sisään</b>
      <form className="login-form" onSubmit={handleLogin}>
        <label>Käyttäjätunnus</label>
        <input
          id="username"
          type="text"
          value={username}
          name="Username"
          onChange={({ target }) => setUsername(target.value)}
        />
        <label>Salasana</label>
        <input
          id="password"
          type="password"
          value={password}
          name="Password"
          onChange={({ target }) => setPassword(target.value)}
        />
        <button type="submit">Kirjaudu</button>
      </form>
    </>
  );
};

export default LoginForm;
