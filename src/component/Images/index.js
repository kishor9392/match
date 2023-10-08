import './index.css'

const Images = props => {
  const {pic, uid, onScore} = props

  const {thumbnailUrl, id} = pic

  const onPress = () => {
    if (id === uid) {
      onScore(true)
    } else {
      onScore(false)
    }
  }

  return (
    <li className="l">
      <button type="button" className="button" onClick={onPress}>
        <img src={thumbnailUrl} className="thum" alt="thumbnail" />
      </button>
    </li>
  )
}

export default Images
