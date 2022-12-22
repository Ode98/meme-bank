function searchAlg(memes, inputWords) {
  memes.sort((a, b) => {
    let aMatchCount = 0;
    let bMatchCount = 0;

    inputWords.forEach((inputWord) => {
      if (a.tags.includes(inputWord)) {
        aMatchCount++;
      }
      if (b.tags.includes(inputWord)) {
        bMatchCount++;
      }
    });

    return bMatchCount - aMatchCount;
  });
  const matchingMemes = memes.filter((meme) => {
    let matchCount = 0;

    inputWords.forEach((inputWord) => {
      if (meme.tags.includes(inputWord)) {
        matchCount++;
      }
    });

    return matchCount > 0;
  });

  return matchingMemes;
}

export default searchAlg;
