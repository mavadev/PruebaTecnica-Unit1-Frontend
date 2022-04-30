import './Navegation.scss'
import { ArrowTop, ArrowBot } from '../../assets/icons/box/switch'

const Navegation = ({ section, setSection }) => {
  const sectionActive = secEsperada =>
    secEsperada === section
      ? 'active'
      : 'desactive'

  const changeSectionActive = () => {
    setSection(
      section === 'objects'
        ? 'specs'
        : 'objects'
    ) 
  }
  return (
    <nav id='navegation'>
      <a
        href="#"
        onClick={() => setSection('objects')}
        className={`nav_link ${sectionActive('objects')}`}
      >
          What´s in the box
      </a>
      <a
        href="#"
        onClick={() => setSection('specs')}
        className={`nav_link ${sectionActive('specs')}`}
      >
          Tech Specs
      </a>
      <section
        className='nav_icon'
        onClick={ changeSectionActive }
      >
        <div className='box_icons top'>
          <ArrowTop className='icon' />
          <ArrowTop className='icon' />
        </div>
        <div className='box_icons bot'>
          <ArrowBot className='icon' />
          <ArrowBot className='icon' />
        </div>
      </section>
    </nav>
  )
}

export default Navegation