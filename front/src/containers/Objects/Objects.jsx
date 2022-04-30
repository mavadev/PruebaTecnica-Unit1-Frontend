import { Fragment, useState } from 'react'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import 'react-lazy-load-image-component/src/effects/blur.css';

import './Objects.scss'
import { Object } from '../../components'
import { objects_box } from '../../api.json'
import { ImgDesktop, ImgMobile } from '../../assets/images'
import { ReactComponent as Check } from '../../assets/icons/box/check.svg'

const Objects = ({ isDesktop }) => {
  const [objectSelected, setObjectSelected] = useState('FARO Helmet')

  return (
    <div id='objects'>
      <section id='content'>
        <section id='listObjects'>
          {
            objects_box.map(object =>
              <Fragment key={object.id}>
                <Object
                  {...object}
                  objectSelected={objectSelected}
                  setObjectSelected={setObjectSelected}
                />
              </Fragment>
            )
          }
        </section>
        <section id='listChecks'>
          {
            objects_box.map(object => (
              <div
                key={object.id}
                id={object.icon}
                title={`Checked ${object.name}`}
                className={`checkIcon ${(objectSelected === object.name) && 'active'}`}
              >
                <Check />
              </div>
            ))
          }
        </section>
      </section>
      <LazyLoadImage
        width='100%'
        height='100%'
        effect='blur'
        id='background'
        alt='What´s in the box'
        src={isDesktop ? ImgDesktop : ImgMobile}
      />
    </div>
  )
}

export default Objects