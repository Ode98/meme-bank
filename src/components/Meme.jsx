import React from 'react'
import { LazyLoadImage } from 'react-lazy-load-image-component'

const Meme = ({ meme }) => {
  return (
    <div className="memePost">
      <LazyLoadImage src={meme.url} alt={meme.url} />
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
