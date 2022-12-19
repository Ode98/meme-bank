import React from 'react'

const MenuBar = ({ user }) => {
  return (
    <div className="menu-bar">
      <div className="menu-bar-item">
        <button>Lataa kuvia</button>
      </div>
      <div className="menu-bar-item">
        <button>Kirjaudu</button>
      </div>
      <div className="menu-bar-item">
        <button>Rekisteröidy</button>
      </div>
      <div className="menu-bar-item">
        <button>Kirjaudu ulos</button>
      </div>
    </div>
  )
}

export default MenuBar
