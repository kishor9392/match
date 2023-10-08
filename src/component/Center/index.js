import './index.css'

const Center = props => {
  const {img} = props
  const {imageUrl} = img

  return (
    <div>
      <img src={imageUrl} alt="match" className="img3" />
    </div>
  )
}

export default Center
