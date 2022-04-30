import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'

import './MainScreen.scss'
import { Navegation } from '../../components'
import { SectionBox, TechSpecs } from '../../containers'

const Desktop = () => {
  const [sectionView, setSectionView] = useState('objects')
  return(
    <>
      <Navegation
        section={sectionView}
        setSection={setSectionView}
      />
      {sectionView === 'objects'
        ? <SectionBox isDesktop />
        : <TechSpecs isDesktop />
      }
    </>
  )
}
const Mobile = () => (
  <>
    <SectionBox />
    <TechSpecs />
  </>
)

const Home = () => {
  const [isDesktop, setIsDesktop] = useState(window.innerWidth > 734)

  // Para el cambio de estado al ir redimensionando la página
  // y se pase a dispositivos con un ancho menor o mayor a 734
  window.onresize = () => {
    const desktop = window.innerWidth > 734
    desktop !== isDesktop && setIsDesktop(desktop)
  }

  return (
    <motion.main
      id='mainScreen'
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.5 }}
    >
      <AnimatePresence>
        {isDesktop
          ? <Desktop />
          : <Mobile />
        }
      </AnimatePresence>
    </motion.main>
  )
}

export default Home