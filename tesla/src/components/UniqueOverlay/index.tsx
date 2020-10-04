import React from 'react';

import { Container, Header, Logo, Burger, Footer } from './styles';

const UniqueOverlay: React.FC = () => {
  return (
    <Container>
      <Header>
        <Logo />
        <Burger />
      </Header>

      <Footer>
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
