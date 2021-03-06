import React from 'react';
import { useTransform } from 'framer-motion';
import useWrapperScroll from '../Models/useWrapperScroll';

import { Container, Header, Logo, Burger, Footer } from './styles';

const UniqueOverlay: React.FC = () => {
  const { scrollYProgress } = useWrapperScroll()

  const opacity = useTransform(scrollYProgress, [0.9, 1], [0, 1])

  return (
    <Container>
      <Header>
        <Logo />
        <Burger />
      </Header>

      <Footer style={{ opacity }}>
        <ul>
          <li>
            <a href="#">Tesla-clone</a>
          </li>
          <li>
            <a href="https://youtu.be/Mf4Se4ZGcG8">UI Clone - Rocketseat</a>
          </li>
          <li>
            <a href="#">by Felipe Marinho</a>
          </li>
        </ul> 
      </Footer>
    </Container>
  );
};

export default UniqueOverlay;
