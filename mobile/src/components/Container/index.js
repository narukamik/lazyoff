import React from 'react';

import { ContainerC, ContainerA } from './styles';

const Container = ({ children }) => {
  return (
    <ContainerC>
      <ContainerA>{children}</ContainerA>
    </ContainerC>
  );
};

export default Container;
