import React from 'react';
import Container from '~/components/Container';
import TaskHeader from '~/components/TaskHeader';
import { Area, Title } from './styles';

const Cronograma = () => {
  return (
    <Container>
      <Area>
        <TaskHeader />
        <Title>Cronograma</Title>
      </Area>
    </Container>
  );
};

export default Cronograma;
