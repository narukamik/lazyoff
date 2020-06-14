import React from 'react';
import Container from '~/components/Container';
import CronHeader from '~/components/CronHeader';
import {
  Area,
  VerticalLine,
  Box,
  CheckArea,
  Time,
  Task,
  Square,
  TextInfos,
  Title,
  Categoria,
} from './styles';

const Cronograma = () => {
  return (
    <Container>
      <CronHeader />
      <Area>
        <VerticalLine />
        <Box>
          <CheckArea />
          <Time>13:00</Time>
          <Task>
            <Square />
            <TextInfos>
              <Title>Compras do mês</Title>
              <Categoria>Casa</Categoria>
            </TextInfos>
          </Task>
        </Box>
      </Area>
    </Container>
  );
};

export default Cronograma;
