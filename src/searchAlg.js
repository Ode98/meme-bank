function searchAlg() {
  const memes = [
    { title: 'firstMeme', tags: ['terve', 'tervaperse', 'lol'] },
    { title: 'secondMeme', tags: ['uuga', 'buuga', 'lol'] },
    { title: 'thirdMeme', tags: ['vittu', 'saatana', 'lol'] },
  ]
  const firstInput = 'lol'
  const secondInput = 'buuga'
  const thirdInput = 'uuga'
  const input = [firstInput, secondInput, thirdInput]

  // console.log('input', input)
  // console.log('memes"', memes)

  console.log('result:', search(memes, input))
}

function search(memes, input) {
  let result = []

  for (let i = 0; i < memes.length; i++) {
    let incl = true
    for (let n = 0; n < input.length; n++) {
      if (memes[i].tags.includes(input[n])) {
        console.log('joo')
      } else {
        incl = false
      }
    }
    if (incl) {
      result = result.concat(memes[i])
    }
  }

  return result
}

export default searchAlg
