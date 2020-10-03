import React from 'react';

import { Container } from './styles';

interface Props extends React.HTMLAttributes<HTMLDivElement> {
  modelName: string,
  overlayNode: React.ReactNode // Elemento react que vai ser renderizado na tela
}

const ModelSection: React.FC<Props> = ({
  modelName,
  overlayNode,
  children,
  ...props
}) => {
  return (
    <Container {...props}>
    </Container>
  );
};

export default ModelSection;
