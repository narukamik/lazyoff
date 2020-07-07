import React from 'react';
import { Animated, Alert } from 'react-native';
import { PanGestureHandler, State } from 'react-native-gesture-handler';
import { Feather } from '@expo/vector-icons';
import Container from '~/components/Container';
import CronHeader from '~/components/CronHeader';
import Task from '~/components/Task';
import {
  Area,
  VerticalLine,
  ScrollArea,
  CheckEndArea,
  TextEnd,
} from './styles';

import infos from '~/assets/infos';

const Lista = ({ navigation }) => {
  // init animation functions
  const offset = 0;
  const fadeAnimAux = true;

  const translateY = new Animated.Value(0);
  const animetedEvent = new Animated.event(
    [{ nativeEvent: { translationY: translateY } }],
    { useNativeDriver: true }
  );

  function onHandlerStateChange(event) {
    // if (event.nativeEvent.oldState === State.ACTIVE) {
    //   let opened = false;
    //   const { translationY } = event.nativeEvent;
    //   offset += translationY;
    //   if (translationY <= -30) {
    //     opened = true;
    //   } else {
    //     translateY.setValue(offset);
    //     translateY.setOffset(0);
    //     offset = 0;
    //   }
    //   Animated.timing(translateY, {
    //     toValue: opened ? -120 : 0,
    //     duration: 200,
    //     useNativeDriver: true,
    //   }).start(() => {
    //     offset = opened ? -120 : 0;
    //     translateY.setOffset(offset);
    //     translateY.setValue(0);
    //   });
    // }
  }

  return (
    <Container>
      <CronHeader
        page="Cronograma"
        titulo="Segunda, 14 de junho"
        navigation={navigation}
        icon="search"
      />
      <PanGestureHandler
        onGestureEvent={animetedEvent}
        onHandlerStateChange={onHandlerStateChange}
      >
        <Area>
          <VerticalLine />
          <ScrollArea
            data={infos.tasks}
            keyExtractor={(item) => String(item.id)}
            renderItem={({ item }) => (
              <Task navigation={navigation} task={item} />
            )}
          />
          <CheckEndArea>
            <Feather name="stop-circle" size={20} color="#eee" />
            <TextEnd>18:00</TextEnd>
          </CheckEndArea>
        </Area>
      </PanGestureHandler>
    </Container>
  );
};

export default Lista;
