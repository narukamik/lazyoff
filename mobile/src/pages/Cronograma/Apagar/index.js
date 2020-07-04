import React from 'react';
import { Feather } from '@expo/vector-icons';
import {
  Container,
  ButtonReturn,
  Title,
  Icon,
  RemoveButton,
  CancelButton,
} from './styles';

const Apagar = ({ navigation }) => {
  return (
    <Container>
      <ButtonReturn onPress={() => navigation.goBack()}>
        <Feather name="chevron-left" size={30} color="#333" />
      </ButtonReturn>
      <Title>Deseja realmente apagar a task?</Title>
      <Icon name="info" size={100} color="black" />
      <RemoveButton>Apagar lista </RemoveButton>
      <CancelButton>Cancelar</CancelButton>
    </Container>
  );
};

export default Apagar;
