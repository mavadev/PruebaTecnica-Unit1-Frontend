import './Object.scss'
import icons from '../../assets/icons/box'

const Object = ({ name, icon, objectSelected, setObjectSelected }) => {
  const setObject = () => {
    setObjectSelected(name)
  }
  const selected = objectSelected === name ? 'checked' : ''

  return (
    <article
      className='object'
    >
      <div
        onClick={ setObject }
        onMouseEnter={ setObject }
        className={`object_icon ${selected}`}
      >
        <div className="icon_background"></div>
        {icons[icon]}
      </div>
      <p className='object_name'>{name}</p>
    </article>
  )
}

export default Object