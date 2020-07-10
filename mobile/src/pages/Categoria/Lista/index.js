import React, { useState, useEffect } from 'react';
import { Animated } from 'react-native';
import { PanGestureHandler, State } from 'react-native-gesture-handler';
import { useIsFocused } from '@react-navigation/native';
import { CategoryService } from '~/services/category';
import Container from '~/components/Container';
import CronHeader from '~/components/CronHeader';
import CategoriaItem from '~/components/CategoriaItem';
import {
  ActionArea,
  ActionButtonArea,
  ButtonNovo,
  TextNovo,
  Area,
  ScrollArea,
} from './styles';

const initialData = { id: 0, titulo: 'Nova Categoria', type: 'button' };
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

  const [data, setData] = useState([initialData]);

  const getAllCategories = () => {
    CategoryService.getAll()
      .then((response) => {
        setData([response._array, initialData]);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const isFocused = useIsFocused();

  useEffect(() => {
    getAllCategories();
  }, []);

  useEffect(
    (isFocused) => {
      if (isFocused) {
        getAllCategories();
      }
    },
    [isFocused]
  );

  return (
    <Container>
      <CronHeader page="Categorias" />
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
              <TextNovo>Adicionar Categoria</TextNovo>
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
            <ScrollArea
              data={data}
              keyExtractor={(item) => String(item.titulo)}
              renderItem={({ item }) => (
                <CategoriaItem categoria={item} navigation={navigation} />
              )}
            />
          </Area>
        </ActionArea>
      </PanGestureHandler>
    </Container>
  );
};

export default Lista;
