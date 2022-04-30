import { motion } from 'framer-motion'

import './TechSpecs.scss'
import { tech_specs } from '../../api.json'
import { Specification } from '../../components'

const TechSpecs = ({ isDesktop }) => (
  <motion.section
    id='specs'
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
  >
    <h1 id='specs_title' className='title'>
      Tech Specs
    </h1>
    <section id='specs_list'>
      {tech_specs.map( s => Specification({ ...s, isDesktop }) )}
    </section>
  </motion.section>
)

export default TechSpecs