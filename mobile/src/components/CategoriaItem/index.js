import React from 'react';
import { Animated } from 'react-native';
import { Feather } from '@expo/vector-icons';

import {
  ButtonArea,
  Button,
  Bolinha,
  CheckText,
  DarkBg,
  ButtonEdit,
  ButtonDelete,
  EditText,
} from './styles';

const CategoriaItem = ({ categoria, navigation }) => {
  let fadeAnimAux = true;

  const fadeAnim = new Animated.Value(20);

  // funções de mostrar(fadeIn) e esconder(fadeOut) o menu de opções
  const fadeIn = () => {
    Animated.timing(fadeAnim, {
      toValue: 120,
      duration: 500,
    }).start();
    fadeAnimAux = false;
  };

  const fadeOut = () => {
    // Will change fadeAnim value to 0 in 5 seconds
    Animated.timing(fadeAnim, {
      toValue: 20,
      duration: 500,
    }).start();
    fadeAnimAux = true;
  };

  return categoria.type && categoria.type === 'button' ? (
    <Button key={categoria.titulo} onPress={() => navigation.navigate('Criar')}>
      <Feather name="plus-circle" size={20} color="#454252" />
      <CheckText color="#454252">Nova categoria</CheckText>
    </Button>
  ) : (
    <ButtonArea
      style={{
        height: fadeAnim,
      }}
    >
      <Button
        key={categoria.titulo}
        onPress={() => (fadeAnimAux ? fadeIn() : fadeOut())}
      >
        <Bolinha backgroundColor={categoria.color} />
        <CheckText>
          {categoria.titulo} {categoria.qtd > 0 && `(${categoria.qtd})`}
        </CheckText>
      </Button>

      <DarkBg
        style={{
          height: fadeAnim.interpolate({
            inputRange: [20, 120],
            outputRange: [0, 76],
            extrapolate: 'clamp',
          }),
          opacity: fadeAnim.interpolate({
            inputRange: [20, 120],
            outputRange: [0, 0.73],
            extrapolate: 'clamp',
          }),
        }}
      >
        <ButtonEdit onPress={() => navigation.navigate('Criar', categoria)}>
          <EditText>Editar</EditText>
          <Feather name="edit-2" size={20} color="#FFF" />
        </ButtonEdit>
        <ButtonDelete onPress={() => navigation.navigate('Apagar', categoria)}>
          <EditText>Apagar</EditText>
          <Feather name="trash-2" size={20} color="#FFF" />
        </ButtonDelete>
      </DarkBg>
    </ButtonArea>
  );
};

export default CategoriaItem;
