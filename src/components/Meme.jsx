import React from 'react'

const Meme = ({ meme }) => {
  return (
    <div className="memePost">
      <img src={meme.url} alt={meme.url} target="_blank"></img>
      <a
        href={meme.url}
        download={meme.url}
        target="_blank"
        rel="noopener noreferrer"
      >
        Download
      </a>
    </div>
  )
}

export default Meme
