import { useState } from 'react'
import { motion } from 'framer-motion'

import './Specification.scss'
import icons from '../../assets/icons/tech_specs/index'
import { ReactComponent as ArrowList } from '../../assets/icons/tech_specs/chevron.icon.svg'

const Item = ({ id, title, description}) => (
  <li
    key={id}
    className='detail'
  >
    {title &&
      <span className='detail_title'>{title}</span>
    }{' '}{description}
  </li>
)

const Specification = ({ id, title, icon, list, isDesktop}) => {
  const [ openDetails, setOpenDetails ] = useState(false)
  
  const listItems = {
    visible: { height: 'max-content', padding: '16px 0px 8px' },
    hidden:  { height: '0px', padding: '0px' }
  }
  
  const setDetails = () => setOpenDetails(!openDetails)
  const viewDetails = openDetails || isDesktop ? 'visible' : 'hidden'

  return (
    <article
      key={id}
      className='specification'
    >
      <header className='header'>
        <p className='header_title'>{title}</p>
        <div className='header_icons'>
          { icons[icon] }
          <ArrowList
            onClick={ setDetails }
            className={`iconDrop ${viewDetails}`}
          />
        </div>
      </header>
      <motion.ul
        initial={viewDetails}
        variants={listItems}  
        animate={viewDetails}
        className='listDetails'
        transition={{type: 'tween'}}
      >
        {list.map( Item )}
      </motion.ul>
    </article>
  )
}

export default Specification