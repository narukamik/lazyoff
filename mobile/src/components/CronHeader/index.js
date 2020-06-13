import React from 'react';

import { Container, SmallTitle, AreaTitle, Title, Icon } from './styles';

const CronHeader = () => {
  return (
    <Container>
      <SmallTitle>Segunda,</SmallTitle>
      <AreaTitle>
        <Title>14 de junho</Title>
        <Icon name="list" size={30} color="#FFF" />
      </AreaTitle>
    </Container>
  );
};

export default CronHeader;
