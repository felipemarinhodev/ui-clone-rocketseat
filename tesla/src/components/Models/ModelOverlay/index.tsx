import React, { useCallback, useLayoutEffect, useState } from 'react';
import { useTransform } from 'framer-motion';
import { CarModel } from '../ModelsContext';
import useWrapperScroll from '../useWrapperScroll';

import { Container } from './styles';

interface Props {
  model: CarModel
}

type SectionDimensions = Pick<HTMLDivElement, 'offsetTop' | 'offsetHeight'>

const ModelOverlay: React.FC<Props> = ({model, children}) => {
    
  const getSectionDimentions = useCallback(() => {
    const dimentions = model.sectionRef.current
    return {
      offsetTop: dimentions?.offsetTop,
      offsetHeight: dimentions?.offsetHeight
    } as SectionDimensions
  }, [model.sectionRef])

  const [dimensions, setDimentions] = useState<SectionDimensions>(
    getSectionDimentions()
  )

  useLayoutEffect(() => {
    function onResize() {
      const windowDimensions = getSectionDimentions()
      window.requestAnimationFrame(() => setDimentions(windowDimensions))
    }

    window.addEventListener('resize', onResize)
    return () => window.removeEventListener('resize', onResize)
  }, [getSectionDimentions])

  const { scrollY } = useWrapperScroll();

  const sectionScrollProgress = useTransform(
    scrollY, 
    y => (y - dimensions.offsetTop) / dimensions.offsetHeight)

  const opacity = useTransform(
    sectionScrollProgress,
    [-0.42, -0.05, 0.05, 0.42],
    [0, 1, 1, 0]
  )
  
  const pointerEvents = useTransform(opacity, value => 
    value > 0 ? 'auto' : 'none'
  )

  return (
    <Container style={{ opacity, pointerEvents }}>
      {children}
    </Container>
  );
};

export default ModelOverlay;
