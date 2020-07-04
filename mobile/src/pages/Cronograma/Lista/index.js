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

import infos from '~/assets/infos';

const Lista = ({ navigation }) => {
  function navigateToDetalhes() {
    navigation.navigate('Detalhes');
  }

  return (
    <Container>
      <CronHeader navigation={navigation} icon="search" />
      <Area>
        <VerticalLine />
        <ScrollArea
          data={infos.tasks}
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

export default Lista;
