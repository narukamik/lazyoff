import React, { useState } from 'react';
import { Feather } from '@expo/vector-icons';
import { Animated, Alert } from 'react-native';
import { PanGestureHandler, State } from 'react-native-gesture-handler';
import colors from '~/config/ColorConfig';

import {
  Box,
  CheckArea,
  Time,
  Container,
  TaskArea,
  Square,
  TextInfos,
  Title,
  Categoria,
  TaskTouch,
  AreaCompletButton,
  CompletButton,
  AreaPlusButton,
  PlusButton,
  ButtonText,
  DarkBg,
  ButtonEdit,
  EditText,
  ButtonDelete,
} from './styles';

const Task = ({ navigation, task, ...rest }) => {
  const [color, setColor] = useState(colors.bgLinearButton);

  // init animation functions
  let offset = 0;
  let fadeAnimAux = true;

  const fadeAnim = new Animated.Value(130);

  // funções de mostrar(fadeIn) e esconder(fadeOut) o menu de opções
  const fadeIn = () => {
    // Will change fadeAnim value to 180 in 0.5 seconds
    Animated.timing(fadeAnim, {
      toValue: 180,
      duration: 500,
    }).start();
    fadeAnimAux = false;
  };

  const fadeOut = () => {
    // Will change fadeAnim value to 0 in 5 seconds
    Animated.timing(fadeAnim, {
      toValue: 130,
      duration: 500,
    }).start();
    fadeAnimAux = true;
  };
  const translateX = new Animated.Value(0);
  const animetedEvent = new Animated.event(
    [{ nativeEvent: { translationX: translateX } }],
    { useNativeDriver: true }
  );

  // Animação da task de arrastar
  function onHandlerStateChange(event) {
    if (event.nativeEvent.oldState === State.ACTIVE) {
      let opened = false;
      const { translationX } = event.nativeEvent;
      offset += translationX;
      if (translationX <= -30) {
        opened = true;
      } else {
        fadeOut();
        translateX.setValue(offset);
        translateX.setOffset(0);
        offset = 0;
      }

      Animated.timing(translateX, {
        toValue: opened ? -120 : 0,
        duration: 200,
        useNativeDriver: true,
      }).start(() => {
        offset = opened ? -120 : 0;
        translateX.setOffset(offset);
        translateX.setValue(0);
      });
    }
  }
  // end animations functions

  // função de completar a task
  function handleCompletTask() {
    Alert.alert('Completar task', 'aqui');
  }

  return (
    <Box
      {...rest}
      style={{
        height: fadeAnim,
      }}
    >
      <CheckArea>
        <Feather name="circle" size={20} color="#6d5dcf" />
      </CheckArea>
      <Time>{task.time}</Time>
      <PanGestureHandler
        onGestureEvent={animetedEvent}
        onHandlerStateChange={onHandlerStateChange}
      >
        <Container>
          <TaskTouch
            style={{
              transform: [
                {
                  translateX: translateX.interpolate({
                    inputRange: [-120, 0],
                    outputRange: [-95, 0],
                    extrapolate: 'clamp',
                  }),
                },
              ],
            }}
            onPress={() => navigation.navigate('Detalhes', { id: task.id })}
          >
            <TaskArea colors={color}>
              <Square />
              <TextInfos>
                <Title>{task.titulo}</Title>
                <Categoria>{task.categoria}</Categoria>
              </TextInfos>
            </TaskArea>
          </TaskTouch>
          <AreaPlusButton
            style={{
              opacity: translateX.interpolate({
                inputRange: [-120, 0],
                outputRange: [1, 0],
                extrapolate: 'clamp',
              }),
            }}
          >
            <PlusButton
              onPress={() => {
                if (fadeAnimAux) {
                  fadeIn();
                } else {
                  fadeOut();
                }
              }}
            >
              <Feather name="more-horizontal" size={20} color="#67656F" />
              <ButtonText>Mais</ButtonText>
            </PlusButton>
          </AreaPlusButton>
          <AreaCompletButton
            style={{
              opacity: translateX.interpolate({
                inputRange: [-120, 0],
                outputRange: [1, 0],
                extrapolate: 'clamp',
              }),
            }}
          >
            <CompletButton onPress={() => handleCompletTask()}>
              <Feather name="check-circle" size={15} color="#FFF" />
            </CompletButton>
          </AreaCompletButton>

          <DarkBg
            style={{
              height: fadeAnim.interpolate({
                inputRange: [130, 180],
                outputRange: [0, 76],
                extrapolate: 'clamp',
              }),
            }}
          >
            <ButtonEdit
              onPress={() => {
                navigation.navigate('Criar', { id: task.id });
              }}
            >
              <EditText>Mais</EditText>
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
        </Container>
      </PanGestureHandler>
    </Box>
  );
};

export default Task;
