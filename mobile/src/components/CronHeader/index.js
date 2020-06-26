import React from 'react';

import {
  Button,
  Container,
  SmallTitle,
  AreaTitle,
  Title,
  Icon,
} from './styles';

const CronHeader = ({ navigation, icon }) => {
  return (
    <Container>
      <AreaTitle>
        <Title>14 de junho</Title>
      </AreaTitle>
    </Container>
  );
};

export default CronHeader;
