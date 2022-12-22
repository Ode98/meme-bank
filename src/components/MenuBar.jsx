import React, { useState } from "react";
import LoginForm from "./LoginForm";
import CreateUserForm from "./CreateUserForm";
import MemePostForm from "./MemePostForm";
import Notification from "./Notification";
import AboutSection from "./AboutSection";

const MenuBar = ({
  user,
  handleLogout,
  setUser,
  addMeme,
  notificationMessage,
  setNotificationMessage,
}) => {
  const [createUserFormVisible, setCreateUserFormVisible] = useState(false);
  const [LoginFormVisible, setLoginFormVisible] = useState(false);
  const [memePostFormVisible, setMemePostFormVisible] = useState(false);
  const [aboutSectionVisible, setAboutSectionVisible] = useState(false);

  const forms = [
    {
      event: "register",
      state: createUserFormVisible,
      setState: setCreateUserFormVisible,
    },
    { event: "login", state: LoginFormVisible, setState: setLoginFormVisible },
    {
      event: "upload",
      state: memePostFormVisible,
      setState: setMemePostFormVisible,
    },
    {
      event: "about",
      state: aboutSectionVisible,
      setState: setAboutSectionVisible,
    },
  ];

  const handleVisibility = (event) => {
    const form = forms.find((form) => form.event === event);
    if (!form) return;

    forms.forEach((form) => {
      if (form.event === event) {
        form.setState(!form.state);
      } else {
        form.setState(false);
      }
    });
  };

  const formComponent =
    (createUserFormVisible && (
      <CreateUserForm
        setCreateUserFormVisible={setCreateUserFormVisible}
        setNotificationMessage={setNotificationMessage}
      />
    )) ||
    (LoginFormVisible && (
      <LoginForm
        user={user}
        setUser={setUser}
        setLoginFormVisible={setLoginFormVisible}
        setNotificationMessage={setNotificationMessage}
      />
    )) ||
    (memePostFormVisible && (
      <MemePostForm
        user={user}
        createMeme={addMeme}
        setMemePostFormVisible={setMemePostFormVisible}
      />
    )) ||
    (aboutSectionVisible && <AboutSection />);

  return (
    <div className="menu">
      <div className="menu-bar">
        <div className="menu-bar-item">
          <button
            onClick={() => {
              if (!user) {
                setNotificationMessage(
                  "Kirjaudu sisään ladataksesi kuvia palvelimelle"
                );
                return;
              }
              handleVisibility("upload");
            }}
          >
            Lataa kuvia pankkiin
          </button>
        </div>
        <div className="menu-bar-item">
          <button onClick={() => handleVisibility("about")}>Sivusta</button>
        </div>
        <div className="menu-bar-item">
          <button
            onClick={() => {
              if (user) {
                setNotificationMessage(
                  "Kirjaudu ulos luodaksesi uusi käyttäjä"
                );
                return;
              }
              handleVisibility("register");
            }}
          >
            Rekisteröidy
          </button>
        </div>
        <div className="menu-bar-item">
          <button
            onClick={() => {
              if (user) {
                setNotificationMessage("Olet jo kirjautunut sisään");
                return;
              }
              handleVisibility("login");
            }}
          >
            {user ? user.username : "Kirjaudu sisään"}
          </button>
        </div>
        <div className="menu-bar-item">
          <button
            onClick={() => {
              if (!user) {
                return;
              }
              const loggingOutUser = user.username;
              handleLogout();
              setNotificationMessage(
                `Käyttäjä ${loggingOutUser} kirjautui ulos`
              );
            }}
          >
            Kirjaudu ulos
          </button>
        </div>
      </div>
      <Notification
        notificationMessage={notificationMessage}
        setNotificationMessage={setNotificationMessage}
      />
      <div className="forms"> {formComponent}</div>
    </div>
  );
};

export default MenuBar;
