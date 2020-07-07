import React from 'react';
import { Feather } from '@expo/vector-icons';
import {Text} from 'react-native';
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
      <Icon name="info" size={30} color="black" />
      <Title>Tem certeza que deseja apagar a categoria <Text style={{color: "#784a78", fontWeight: "bold"}}>Faculdade</Text>
      ? Esta ação não poderá ser desfeita.</Title>
      <RemoveButton>Apagar Faculdade</RemoveButton>
      <CancelButton>Não Apagar</CancelButton>
    </Container>
  );
};

export default Apagar;
