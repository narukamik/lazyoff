import React from 'react';
import { Feather } from '@expo/vector-icons';
import { TaskService } from '~/services/tasks';
import {
  Container,
  ButtonReturn,
  Title,
  Icon,
  RemoveButton,
  CancelButton,
} from './styles';

const Apagar = ({ route, navigation }) => {
  const { task } = route.params;
  return (
    <Container>
      <ButtonReturn onPress={() => navigation.goBack()}>
        <Feather name="chevron-left" size={30} color="#333" />
      </ButtonReturn>
      <Title>Deseja realmente apagar a task?</Title>
      <Icon name="info" size={100} color="black" />
      <RemoveButton
        onPress={() => {
          TaskService.deleteById(task.id);
          navigation.goBack();
        }}
      >
        Apagar lista
      </RemoveButton>
      <CancelButton
        onPress={() => {
          navigation.pop();
        }}
      >
        Cancelar
      </CancelButton>
    </Container>
  );
};

export default Apagar;
