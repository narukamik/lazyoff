import React, { useState, useEffect } from 'react';
import { Animated } from 'react-native';
import { PanGestureHandler, State } from 'react-native-gesture-handler';
import { useIsFocused } from '@react-navigation/native';
import { Feather } from '@expo/vector-icons';
import { TaskService } from '~/services/tasks';
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

  const [data, setData] = useState([]);

  const isFocused = useIsFocused();

  const getAllTasks = () => {
    TaskService.getAll()
      .then((response) => {
        setData(response._array);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    isFocused && getAllTasks();
  }, [isFocused]);

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
              <TextNovo>Adicionar Tarefa</TextNovo>
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
              data={data}
              keyExtractor={(item) => String(item.id)}
              renderItem={({ item }) => (
                <Task navigation={navigation} task={item} showTime />
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
