import React from 'react';
import { Text } from 'react-native';
// TODO ALTERAR PARA TELA DE POMODORO
import colors from '~/config/ColorConfig';
import infos from '~/assets/infos';
import Container from '~/components/Container';
import TaskHeader from '~/components/TaskHeader';
import CheckItem from '~/components/CheckItem';
import { Area, TaskArea, TaskList } from './styles';

const Detalhes = () => {
  return (
    <Container>
      <TaskHeader backgroundColor="#FFF" />
      <Area>
        <TaskArea>
          <TaskList
            data={infos.tasks}
            keyExtractor={(item) => String(item.id)}
            renderItem={({ item }) => <CheckItem item={item} />}
          />
        </TaskArea>
      </Area>
    </Container>
  );
};

export default Detalhes;
