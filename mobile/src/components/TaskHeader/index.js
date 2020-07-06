import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { Feather } from '@expo/vector-icons';
import colors from '~/config/ColorConfig';

import {
  Container,
  ButtonReturn,
  Title,
  AreaInfos,
  Area,
  AreaText,
  Nivel,
} from './styles';

const TaskHeader = ({ backgroundColor }) => {
  const navigation = useNavigation();

  return (
    <Container style={{ backgroundColor }}>
      <ButtonReturn onPress={() => navigation.goBack()}>
        <Feather name="chevron-left" size={30} color={colors.primary} />
      </ButtonReturn>
      <Title>Sprint 1</Title>
      <AreaInfos>
        <Area>
          <Nivel />
          <AreaText>Trabalho</AreaText>
        </Area>
        <Area>
          <Feather name="calendar" size={20} color="#FFF" />
          <AreaText> Jul 15 a Jul 18</AreaText>
        </Area>
        <Area>
          <AreaText>8:00</AreaText>
        </Area>
      </AreaInfos>
    </Container>
  );
};

export default TaskHeader;
