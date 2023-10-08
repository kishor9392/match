import './index.css'

const Tabs = props => {
  const {tab, isActive, onCategory} = props

  const {displayText, tabId} = tab

  const a = isActive ? 'on' : ''

  const onTap = () => {
    onCategory(tabId)
  }

  return (
    <li className="li">
      <button className={`btn ${a}`} type="button" onClick={onTap}>
        {displayText}
      </button>
    </li>
  )
}

export default Tabs
