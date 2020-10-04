import React, { useCallback, useLayoutEffect, useState } from 'react';
import { CarModel } from '../ModelsContext';
import useWrapperScroll from '../useWrapperScroll';

import { Container } from './styles';

interface Props {
  model: CarModel
}

type SectionDimensions = Pick<HTMLDivElement, 'offsetTop' | 'offsetHeight'>

const ModelOverlay: React.FC<Props> = ({model, children}) => {
  const { scrollY } = useWrapperScroll();
  
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
      const data = getSectionDimentions()
      console.log(data);
      window.requestAnimationFrame(() => setDimentions(data))
    }

    window.addEventListener('resize', onResize)
    return () => window.removeEventListener('resize', onResize)
  }, [getSectionDimentions])
  
  return (
    <Container>
      {children}
    </Container>
  );
};

export default ModelOverlay;
