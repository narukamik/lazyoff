import React from 'react';
import { useNavigation } from '@react-navigation/native';
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
  
  const navigation = useNavigation();

  function navigateToHome() {
    navigation.navigate('Home');
  }

  return (
    <Container>
      <ButtonReturn onPress={() => navigateToHome()}>
        <Feather name="chevron-left" size={30} color="#FFF" />
      </ButtonReturn>
      <Title>Sprint 1</Title>
      <AreaInfos>
        <Area>
          <Feather name="calendar" size={20} color="#FFF" />
          <AreaText> Jul 15 a Jul 18</AreaText>
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
