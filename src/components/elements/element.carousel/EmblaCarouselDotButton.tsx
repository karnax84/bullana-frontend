import React, {
    ComponentPropsWithRef,
    useCallback,
    useEffect,
    useState
  } from 'react'
  import { EmblaCarouselType } from 'embla-carousel'
import { styled } from 'styled-components';
  
  const Dot = styled.button`
  background-color: transparent;
  cursor: pointer;
  position: relative;
  padding: 0;
  width: 30px;
  height: 3px;
  margin-right: 5px;
  margin-left: 5px;
  border: 0;
  display: flex;
  align-items: center;
  

  &::after {
    background-color: #FFFFFF40;
    width: 100%;
    height: 3px;
    content: "";
    border-radius: 5px;
  }
`;


  type UseDotButtonType = {
    selectedIndex: number
    scrollSnaps: number[]
    onDotButtonClick: (index: number) => void
  }
  
  export const useDotButton = (
    emblaApi: EmblaCarouselType | undefined
  ): UseDotButtonType => {
    const [selectedIndex, setSelectedIndex] = useState(0)
    const [scrollSnaps, setScrollSnaps] = useState<number[]>([])
  
    const onDotButtonClick = useCallback(
      (index: number) => {
        if (!emblaApi) return
        emblaApi.scrollTo(index)
      },
      [emblaApi]
    )
  
    const onInit = useCallback((emblaApi: EmblaCarouselType) => {
      setScrollSnaps(emblaApi.scrollSnapList())
    }, [])
  
    const onSelect = useCallback((emblaApi: EmblaCarouselType) => {
      setSelectedIndex(emblaApi.selectedScrollSnap())
    }, [])
  
    useEffect(() => {
      if (!emblaApi) return
  
      onInit(emblaApi)
      onSelect(emblaApi)
      emblaApi.on('reInit', onInit).on('reInit', onSelect).on('select', onSelect)
    }, [emblaApi, onInit, onSelect])
  
    return {
      selectedIndex,
      scrollSnaps,
      onDotButtonClick
    }
  }
  
  type PropType = ComponentPropsWithRef<'button'>
  
  export const DotButton: React.FC<PropType> = (props) => {
    const { children, ...restProps } = props
  
    return (
      <Dot type="button" {...restProps}>
        {children}
      </Dot>
    )
  }
  