import React from 'react'
import Meme from './Meme'
import { useMemo } from 'react'

const MemeFeed = ({ memes }) => {
  // const loadMemes = useMemo(() => {
  //   const memoedMemes = []
  //   memes.forEach((meme) => {
  //     memoedMemes.push(<Meme key={meme.id} meme={meme} />)
  //   })
  //   return memoedMemes
  // }, [3])

  // console.log(loadMemes)
  // loadMemes()
  return (
    <div>
      {memes.map((meme) => (
        <Meme key={meme.id} meme={meme} />
      ))}
    </div>
  )
}

export default MemeFeed
