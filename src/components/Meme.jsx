import React from 'react'

const Meme = ({ meme }) => {
  return (
    <div className="memePost">
      <h2>{meme.title}</h2>
      <img src={meme.url} alt={meme.title} target="_blank"></img>
      <a href={meme.url} download={meme.title}>
        Download
      </a>
    </div>
  )
}

export default Meme
