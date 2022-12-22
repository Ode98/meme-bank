import React, { useEffect } from "react";

const Notification = ({ notificationMessage, setNotificationMessage }) => {
  let timeOut;

  useEffect(() => {
    if (notificationMessage !== "") {
      clearTimeout(timeOut);
      timeOut = setTimeout(() => setNotificationMessage(""), 5000);
    }
    return () => clearTimeout(timeOut);
  }, [notificationMessage]);

  if (notificationMessage !== "") {
    return <div className="notification">{notificationMessage}</div>;
  } else {
    return null;
  }
};

export default Notification;
