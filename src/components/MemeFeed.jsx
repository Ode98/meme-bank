import React from 'react'
import Meme from './Meme'

const MemeFeed = ({ memes }) => {
  return (
    <div>
      {memes.map((meme) => (
        <Meme key={meme.id} meme={meme} />
      ))}
    </div>
  )
}

export default MemeFeed
