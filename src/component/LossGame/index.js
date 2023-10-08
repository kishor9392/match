import './index.css'

const LossGame = props => {
  const {score} = props

  return (
    <div className="Game">
      <img
        src="https://assets.ccbp.in/frontend/react-js/match-game-trophy.png"
        className="trophy"
        alt="trophy"
      />

      <p className="SCORE">YOUR SCORE</p>
      <p className="SCORE">{score} </p>

      <button type="button" className="pink">
        <img
          src="https://assets.ccbp.in/frontend/react-js/match-game-play-again-img.png"
          alt="reset"
          className="reset"
        />
        <p className="resetP">PLAY AGAIN</p>
      </button>
    </div>
  )
}

export default LossGame
