import React from 'react';
import { Feather } from '@expo/vector-icons';
import Container from '~/components/Container';
import CronHeader from '~/components/CronHeader';
import Task from '~/components/Task';
import {
  Area,
  VerticalLine,
  ScrollArea,
  CheckEndArea,
  TextEnd,
} from './styles';

import tasks from '~/assets/infos';

const Cronograma = ({ navigation }) => {
  function navigateToDetalhes() {
    navigation.navigate('Detalhes');
  }
  return (
    <Container>
      <CronHeader navigation={navigation} icon="list" />
      <Area>
        <VerticalLine />
        <ScrollArea
          data={tasks}
          keyExtractor={(item) => String(item.id)}
          renderItem={({ item }) => (
            <Task navigation={navigation} task={item} />
          )}
        />
        <CheckEndArea>
          <Feather name="stop-circle" size={20} color="#eee" />
          <TextEnd>18:00</TextEnd>
        </CheckEndArea>
      </Area>
    </Container>
  );
};

export default Cronograma;
