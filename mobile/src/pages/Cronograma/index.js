import React from 'react';
import { PanResponder } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Feather } from '@expo/vector-icons';
import Container from '~/components/Container';
import CronHeader from '~/components/CronHeader';
import {
  Area,
  VerticalLine,
  Box,
  CheckArea,
  CheckEndArea,
  TextEnd,
  Time,
  Task,
  Square,
  TextInfos,
  Title,
  Categoria,
} from './styles';

const Cronograma = () => {
  const navigation = useNavigation();

  function navigateToDetalhes() {
    navigation.navigate('Detalhes');
  }

  return (
    <Container>
      <CronHeader navigation={navigation} icon="list" />
      <Area>
        <VerticalLine />
        <Box>
          <CheckArea>
            <Feather name="circle" size={20} color="#6d5dcf" />
          </CheckArea>
          <Time>13:00</Time>
          <Task onPress={() => navigateToDetalhes()}>
            <Square />
            <TextInfos>
              <Title>Compras do mês</Title>
              <Categoria>Casa</Categoria>
            </TextInfos>
          </Task>
        </Box>
        <CheckEndArea>
          <Feather name="stop-circle" size={20} color="#eee" />
          <TextEnd>18:00</TextEnd>
        </CheckEndArea>
      </Area>
    </Container>
  );
};

export default Cronograma;
