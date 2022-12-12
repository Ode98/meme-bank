function searchAlg(memes, input) {
  let result = []
  const factor = input.length
  let acc = 1 // Accuracy of search. Bigger number means less accurate but more forgiving search
  if (factor === 1) {
    acc = acc - 1
  }

  for (let i = 0; i < memes.length; i++) {
    let includes = true
    let unMatchingStrings = 0
    for (let n = 0; n < input.length; n++) {
      if (memes[i].tags.includes(input[n])) {
        continue
      } else {
        unMatchingStrings = unMatchingStrings + 1
        if (unMatchingStrings > acc) {
          includes = false
        }
        continue
      }
    }
    if (includes) {
      result = result.concat(memes[i])
    }
  }
  return result
}

export default searchAlg
