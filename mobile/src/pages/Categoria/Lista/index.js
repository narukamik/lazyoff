import React, { useState } from 'react';
import { View, Button, CheckBox, Modal, Alert, Image, TouchableOpacity} from 'react-native';
import Container from '~/components/Container';
import { Feather } from '@expo/vector-icons';
import {
  Area,
  CheckArea,
  CheckText,
  CheckItem,
  Text,
  Title,
  HeaderTop,
  Div,
  Bolinha,
  Separar,
  Checar,
  ScrollArea,
} from './styles';
// import { Categoria } from '~/components/Task/styles';


const Lista = ({ navigation }) => {
  function navigateToCategoria() {
    navigation.goBack();
  }
  return (
    <Container>
      <HeaderTop>
        <Title>Categorias</Title>
      </HeaderTop>
    <Area>
      <Bolinha style={{backgroundColor: "#6278C1"}}/><Text>Faculdade (15)</Text>
      <Separar/>
      <Bolinha style={{backgroundColor: "#E67373"}}/><Text>Trabalho (04)</Text>
      <Separar/>
      <Bolinha style={{backgroundColor: "#61C3D0"}}/><Text>Casa</Text>
      <Separar/>
      <TouchableOpacity onPress={() => navigation.navigate("Criar")}
       style={{width: "110%"}}>

      <Feather style={{marginLeft: 2, opacity: 0.6}}name="plus-circle" size={20} color="black" />

      <Text style={{marginLeft: 30, marginRight: 30, marginTop: -32, color: "#000000", opacity: 0.6}}>
        Nova categoria
      </Text>
      </TouchableOpacity>

    </Area>
    {/* <Modal 
    transparent={true}
    visible={true}>
        <View style={{backgroundColor: "#000000aa", flex:1}}>
          <View style={{backgroundColor: "#ffff", margin:50, padding:40, borderRadius: 10, flex:1}}>

          </View>
        </View>
    </Modal> */}
    </Container>
  );
};

export default Lista;
