import React from 'react';
import { Feather } from '@expo/vector-icons';

import {
  Container,
  ButtonReturn,
  Title,
  AreaInfos,
  Area,
  AreaText,
  Nivel,
} from './styles';

const TaskHeader = () => {
  return (
    <Container>
      <ButtonReturn>
        <Feather name="chevron-left" size={30} color="#FFF" />
      </ButtonReturn>
      <Title>Sprint 1</Title>
      <AreaInfos>
        <Area>
          <AreaText>
            <Feather name="calendar" size={20} color="#FFF" /> Jul 15 a Jul 18
          </AreaText>
        </Area>
        <Area>
          <Nivel />
          <AreaText>Trabalho</AreaText>
        </Area>
        <Area>
          <AreaText>8:00 as 18:00</AreaText>
        </Area>
      </AreaInfos>
    </Container>
  );
};

export default TaskHeader;
