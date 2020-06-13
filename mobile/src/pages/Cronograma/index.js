import React from 'react';
import Container from '~/components/Container';
import CronHeader from '~/components/CronHeader';
import { Area, Title } from './styles';

const Cronograma = () => {
  return (
    <Container>
      <CronHeader />
      <Area>
        <Title>Cronograma</Title>
      </Area>
    </Container>
  );
};

export default Cronograma;
