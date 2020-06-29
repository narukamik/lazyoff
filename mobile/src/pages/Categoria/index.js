import React from 'react';
import Container from '~/components/Container';
import CronHeader from '~/components/CronHeader';
import { Area } from './styles';

const Cronograma = ({ navigation }) => {
  function navigateToDetalhes() {
    navigation.navigate('Detalhes');
  }

  return (
    <Container>
      <CronHeader navigation={navigation} icon="list" />
      <Area />
    </Container>
  );
};

export default Cronograma;
