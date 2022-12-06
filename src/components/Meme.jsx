const Meme = ({ meme }) => {
  return (
    <div className="memePost">
      <h2>{meme.title}</h2> <img src={meme.url} alt={meme.title}></img>
    </div>
  )
}

export default Meme
