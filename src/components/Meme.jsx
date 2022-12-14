import React from 'react'
import { LazyLoadImage } from 'react-lazy-load-image-component'

const Meme = ({ meme }) => {
  const downloadImage = (event) => {
    event.preventDefault()
    const imageUrl = event.target.src
    const link = document.createElement('a')
    link.href = imageUrl
    link.target = '_blank'
    link.rel = 'noopener noreferrer'
    link.download = 'my-image.jpg'
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  return (
    <div className="memePost">
      <LazyLoadImage src={meme.url} alt={meme.url} onClick={downloadImage} />
    </div>
  )
}

export default Meme
