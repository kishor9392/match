import './index.css'

const NavBar = props => {
  const {score} = props

  return (
    <nav className="bg">
      <div>
        <img
          src="https://assets.ccbp.in/frontend/react-js/match-game-website-logo.png"
          alt="website logo"
          className="img"
        />
      </div>

      <div className="bg1">
        <div className="bg1">
          <p className="p">Score:</p>
          <p className="p1">0</p>
        </div>
        <div className="bg1">
          <img
            src="https://assets.ccbp.in/frontend/react-js/match-game-timer-img.png"
            alt="timer"
            className="img1"
          />

          <p className="p1">60 sec</p>
        </div>
      </div>
    </nav>
  )
}

export default NavBar
