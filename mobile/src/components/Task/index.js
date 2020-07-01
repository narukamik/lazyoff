import React from 'react';
import { Feather } from '@expo/vector-icons';
import { Animated } from 'react-native';
import { PanGestureHandler } from 'react-native-gesture-handler';

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
} from './styles';

const Task = () => {
  const translateX = new Animated.Value(0);
  const animetedEvent = new Animated.event(
    [{ nativeEvent: { translationX: translateX } }],
    { useNativeDriver: true }
  );
  function onHandlerStateChange(event) {
    console.log(event);
  }
  return (
    <Box>
      <CheckArea>
        <Feather name="circle" size={20} color="#6d5dcf" />
      </CheckArea>
      <Time>13:00</Time>
      {/* <TaskTouch onPress={() => navigateToDetalhes()}> */}
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
          >
            <TaskArea>
              <Square />
              <TextInfos>
                <Title>Compras do mês</Title>
                <Categoria>Casa</Categoria>
              </TextInfos>
            </TaskArea>
          </TaskTouch>
          <AreaPlusButton>
            <PlusButton>
              <Feather name="more-horizontal" size={20} color="#67656F" />
              <ButtonText>Mais</ButtonText>
            </PlusButton>
          </AreaPlusButton>
          <AreaCompletButton>
            <CompletButton>
              <Feather name="check-circle" size={15} color="#FFF" />
            </CompletButton>
          </AreaCompletButton>
          {/* <DarkBg /> */}
        </Container>
      </PanGestureHandler>
    </Box>
  );
};

export default Task;
