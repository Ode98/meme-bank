import React from 'react'
import Meme from './Meme'

const MemeFeed = ({ memes, handleLike }) => {
  return (
    <div className="meme-feed">
      {memes.map((meme) => (
        <Meme key={meme.id} meme={meme} handleLike={handleLike} />
      ))}
    </div>
  )
}

export default MemeFeed
