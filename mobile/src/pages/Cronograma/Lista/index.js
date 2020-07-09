import React from 'react';
import { Animated, Alert } from 'react-native';
import { PanGestureHandler, State } from 'react-native-gesture-handler';
import { TaskService } from '~/services/tasks';
import { Feather } from '@expo/vector-icons';
import Container from '~/components/Container';
import CronHeader from '~/components/CronHeader';
import Task from '~/components/Task';
import {
  ActionArea,
  ActionButtonArea,
  ButtonNovo,
  TextNovo,
  Area,
  VerticalLine,
  ScrollArea,
  CheckEndArea,
  TextEnd,
} from './styles';

let state = {
  data: [],
  value: null,
  onChangeText: null,
  dataId: null,
  dataInsert: null,
};

const getAllTasks = () => {
  TaskService.getAll().then((response) => {
    state.data = response._array;
  }),
    (error) => {
      console.log(error);
    };
};

getAllTasks(); // precisa rodar toda vez que a página abrir

console.log(state.data)

const infos = state.data.map((item) => {
  return item
});

const Lista = ({ navigation }) => {
  // init animation functions
  let offset = 0;

  const translateY = new Animated.Value(0);
  const animetedEvent = new Animated.event(
    [{ nativeEvent: { translationY: translateY } }],
    { useNativeDriver: true }
  );

  function onHandlerStateChange(event) {
    if (event.nativeEvent.oldState === State.ACTIVE) {
      let opened = false;
      const { translationY } = event.nativeEvent;
      offset += translationY;
      if (translationY >= 20) {
        opened = true;
      } else {
        translateY.setValue(offset);
        translateY.setOffset(0);
        offset = 0;
      }

      Animated.timing(translateY, {
        toValue: opened ? 50 : 0,
        duration: 200,
        useNativeDriver: true,
      }).start(() => {
        offset = opened ? 50 : 0;
        translateY.setOffset(offset);
        translateY.setValue(0);
      });
    }
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
        <ActionArea>
          <ActionButtonArea
            style={{
              transform: [
                {
                  translateY: translateY.interpolate({
                    inputRange: [0, 50],
                    outputRange: [40, 0],
                    extrapolate: 'clamp',
                  }),
                },
              ],
            }}
          >
            <ButtonNovo onPress={() => navigation.navigate('Criar')}>
              <TextNovo>Adicionar Task</TextNovo>
            </ButtonNovo>
          </ActionButtonArea>
          <Area
            style={{
              transform: [
                {
                  translateY: translateY.interpolate({
                    inputRange: [0, 50],
                    outputRange: [0, 40],
                    extrapolate: 'clamp',
                  }),
                },
              ],
              borderTopLeftRadius: translateY.interpolate({
                inputRange: [0, 50],
                outputRange: [20, 0],
                extrapolate: 'clamp',
              }),
              borderTopRightRadius: translateY.interpolate({
                inputRange: [0, 50],
                outputRange: [20, 0],
                extrapolate: 'clamp',
              }),
            }}
          >
            <VerticalLine />
            <ScrollArea
              data={infos}
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
        </ActionArea>
      </PanGestureHandler>
    </Container>
  );
};

export default Lista;
