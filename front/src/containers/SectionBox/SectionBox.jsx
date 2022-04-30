import { motion } from 'framer-motion'

import './SectionBox.scss'
import { Objects } from '../index'

const SectionBox = ({ isDesktop }) => (
  <motion.section
    id='box'
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
  >
    <h1
      id='box_title'
      className='title'
    >
      What´s in the box
    </h1>
    <Objects isDesktop={isDesktop} />
    {!isDesktop &&
      <p id='box_items'>
        FARO Helmet, Navigation Remote, USB Type-C Charching 
        Cable, Rubber Bands and User Manual.
      </p>
    }
  </motion.section>
)

export default SectionBox