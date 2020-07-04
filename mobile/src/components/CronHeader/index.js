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
      <Title>Cronograma</Title>
      <AreaTitle>
        <SmallTitle>Segunda, 14 de junho</SmallTitle>
        <Button
          onPress={() => navigation.jumpTo('Home', { screen: 'Checklist' })}
        >
          <Icon name={icon} size={20} color="#FFF" />
        </Button>
      </AreaTitle>
    </Container>
  );
};

export default CronHeader;
