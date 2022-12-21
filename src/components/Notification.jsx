import React, {useState} from 'react'

const Notification = ({ notificationMessage, setNotificationMessage }) => {
  // if (notificationMessage === null) {
  //   return null
  // }

  // const [visible, setVisible] = useState(true);

  const closeNotification = () => {
    setNotificationMessage("")
    // setVisible(false);
  }

  if (notificationMessage !== "") {
    setTimeout(closeNotification, 5000); // Close the notification after 5
    return <div className="notification">{notificationMessage}</div>
  } else {
    return null
  }
}
export default Notification
