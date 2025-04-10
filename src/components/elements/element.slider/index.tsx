import React from 'react'
import { EmblaOptionsType } from 'embla-carousel'
import useEmblaCarousel from 'embla-carousel-react'
import './embla.css'
import { Div } from 'components/base'

type PropType = {
  options?: EmblaOptionsType,
  children?: React.ReactNode
}

const EmblaSlider: React.FC<PropType> = (props) => {
  const { options, children } = props
  const [emblaRef, emblaApi] = useEmblaCarousel(options)


  return (
    <section className="embla_1">
      <div className="embla__viewport_1" ref={emblaRef}>
        <div className="embla__container_1">
          {children && React.Children.map(children, (child, index) => (
            <div className="embla__slide_1" key={index}>
              {child}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default EmblaSlider
