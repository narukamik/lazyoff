import React from 'react';

import { Container, Dot, Icon } from './styles';

const IconDot = ({ isActive, name, color, size }) => {
  return (
    <Container>
      <Icon name={name} size={size} color={color} />
      <Dot color={color} isActive={isActive} />
    </Container>
  );
};

export default IconDot;
