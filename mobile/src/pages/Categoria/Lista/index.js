import React from 'react';
import { Animated } from 'react-native';
import { Feather } from '@expo/vector-icons';
import Container from '~/components/Container';
import {
  Area,
  ScrollArea,
  Bolinha,
  CheckText,
  ButtonArea,
  Button,
  DarkBg,
  ButtonEdit,
  EditText,
  ButtonDelete,
} from './styles';
import CronHeader from '~/components/CronHeader';
import infos from '~/assets/infos';

const { categoria } = infos;
const Lista = ({ navigation }) => {
  function renderItem(item) {
    const { titulo, color, qtd, type } = item;
    let fadeAnimAux = true;

    const fadeAnim = new Animated.Value(20);

    // funções de mostrar(fadeIn) e esconder(fadeOut) o menu de opções
    const fadeIn = () => {
      // Will change fadeAnim value to 180 in 0.5 seconds
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

    if (type && type === 'button') {
      return (
        <Button key={titulo} onPress={() => navigation.navigate('Criar')}>
          <Feather name="plus-circle" size={20} color="#454252" />
          <CheckText color="#454252">Nova categoria</CheckText>
        </Button>
      );
    }

    return (
      <ButtonArea
        style={{
          height: fadeAnim,
        }}
      >
        <Button
          key={titulo}
          onPress={() => {
            if (fadeAnimAux) {
              fadeIn();
            } else {
              fadeOut();
            }
          }}
        >
          <Bolinha backgroundColor={color} />
          <CheckText>
            {titulo} {qtd > 0 && `(${qtd})`}
          </CheckText>
        </Button>

        <DarkBg
          style={{
            height: fadeAnim.interpolate({
              inputRange: [20, 120],
              outputRange: [0, 76],
              extrapolate: 'clamp',
            }),
          }}
        >
          
          <ButtonEdit
            onPress={() => {
              navigation.navigate('Criar', { id: titulo });
            }}
            style={{
              borderBottomWidth: fadeAnim.interpolate({
                inputRange: [20, 120],
                outputRange: [0, 1],
                extrapolate: 'clamp',
              }),
            }}
          >
            <EditText>Editar</EditText>
            <Feather name="edit-2" size={20} color="#FFF" />
          </ButtonEdit>

          <ButtonDelete
            onPress={() => {
              navigation.navigate('Apagar', { id: task.id });
            }}
          >
            <EditText>Apagar</EditText>
            <Feather name="trash-2" size={20} color="#FFF" />
          </ButtonDelete>

        </DarkBg>
      </ButtonArea>
    );
  }

  return (
    <Container>
      <CronHeader page="Categorias" />
      <Area>
        <ScrollArea
          data={categoria}
          keyExtractor={(item) => String(item.titulo)}
          renderItem={({ item }) => renderItem(item)}
        />
      </Area>
    </Container>
  );
};

export default Lista;
