import React from 'react';
import { Animated } from 'react-native';
import { PanGestureHandler } from 'react-native-gesture-handler';
import { Feather } from '@expo/vector-icons';
import Container from '~/components/Container';
import CronHeader from '~/components/CronHeader';
import {
  Area,
  VerticalLine,
  Box,
  CheckArea,
  CheckEndArea,
  TextEnd,
  Time,
  Task,
  Square,
  TextInfos,
  Title,
  Categoria,
  TaskTouch,
} from './styles';

const Cronograma = ({ navigation }) => {
  const translateX = new Animated.Value(0);
  const animetedEvent = new Animated.event(
    [{ nativeEvent: { translationX: translateX } }],
    { useNativeDriver: true }
  );

  function navigateToDetalhes() {
    navigation.navigate('Detalhes');
  }
  function onHandlerStateChange(event) {
    console.log(event);
  }
  return (
    <Container>
      <CronHeader navigation={navigation} icon="list" />
      <Area>
        <VerticalLine />
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
            <TaskTouch
              style={{
                transform: [
                  {
                    translateX: translateX.interpolate({
                      inputRange: [-120, 0, 120],
                      outputRange: [-60, 0, 60],
                      extrapolate: 'clamp',
                    }),
                  },
                ],
              }}
            >
              <Task>
                <Square />
                <TextInfos>
                  <Title>Compras do mês</Title>
                  <Categoria>Casa</Categoria>
                </TextInfos>
              </Task>
            </TaskTouch>
          </PanGestureHandler>
        </Box>
        <CheckEndArea>
          <Feather name="stop-circle" size={20} color="#eee" />
          <TextEnd>18:00</TextEnd>
        </CheckEndArea>
      </Area>
    </Container>
  );
};

export default Cronograma;
