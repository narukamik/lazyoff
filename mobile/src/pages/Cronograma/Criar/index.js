import React, { useState, useEffect } from 'react';
import { Animated } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { useIsFocused } from '@react-navigation/native';
import DateTimePicker from '@react-native-community/datetimepicker';
import { format } from 'date-fns';

import { CategoryService } from '~/services/category';
import { TaskService } from '~/services/tasks';

import Container from '~/components/Container';
import CategoriaItem from '~/components/CategoriaItem';
import {
  Area,
  AreaText,
  Box,
  InputArea,
  Input,
  PickerArea,
  PickerSelect,
  ButtonReturn,
  TextTimePicker,
  TouchDateTime,
  Submit,
  WhiteText,
  CategoriaSelectArea,
  CategoriaSelect,
  CategoriaButton,
  CategoriaBolinha,
  CategoriaText,
} from './styles';

const Criar = ({ navigation }) => {
  const [date, setDate] = useState(new Date());
  const [mode, setMode] = useState('date');
  const [show, setShow] = useState(false);
  const [display, setDisplay] = useState('default');
  const [dia, setDia] = useState('Dia');
  const [hora, setHora] = useState('Hora');
  const [color, setColor] = useState('#6d5dcf');
  const [categoria, setCategoria] = useState('Categoria');
  const [categorias, setCategorias] = useState([]);

  /**
   * load values
   */
  const getAllCategories = () => {
    CategoryService.getAll()
      .then((response) => {
        setCategorias(response._array);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const isFocused = useIsFocused();

  useEffect(() => {
    getAllCategories();
  }, [isFocused]);

  /**
   * functions to set values
   */
  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShow(Platform.OS === 'ios');
    setDate(currentDate);

    const formattedDate = format(currentDate, 'dd/MM');
    setDia(formattedDate);

    const formattedTime = format(currentDate, 'HH:mm');
    setHora(formattedTime);
  };

  const showMode = (currentMode) => {
    setShow(true);
    setMode(currentMode);
  };

  const showDatepicker = () => {
    showMode('date');
    setDisplay('default');
  };

  const showTimepicker = () => {
    showMode('time');
    setDisplay('spinner');
  };

  const InsertTask = (item) => {
    const insertId = TaskService.addData(item);
    if (insertId == null || insertId == undefined) {
      alert('Não foi possivel inserir o novo animal');
    }
  };

  // const handleCategoria = async () => {};

  /**
   * animation events
   */
  const fadeAnim = new Animated.Value(32);
  let fadeAnimAux = true;

  // funções de mostrar(fadeIn) e esconder(fadeOut) o menu de opções
  const fadeIn = () => {
    // Will change fadeAnim value to 180 in 0.5 seconds
    Animated.timing(fadeAnim, {
      toValue: 100,
      duration: 500,
    }).start();
    fadeAnimAux = false;
  };

  const fadeOut = () => {
    // Will change fadeAnim value to 0 in 5 seconds
    Animated.timing(fadeAnim, {
      toValue: 32,
      duration: 500,
    }).start();
    fadeAnimAux = true;
  };

  return (
    <Container>
      <Area>
        <ButtonReturn onPress={() => navigation.goBack()}>
          <Feather name="chevron-left" size={30} color="#FFF" />
        </ButtonReturn>
        <AreaText>Dê um nome à sua nova lista</AreaText>
        <Box>
          <InputArea>
            <Input placeholder="Digite o nome da sua lista..." />
            <Feather name="smile" size={24} color="#6d5dcf" />
          </InputArea>
          <PickerArea>
            <TouchDateTime onPress={showDatepicker}>
              <PickerSelect>
                <Feather name="calendar" size={20} color="#6d5dcf" />
                <TextTimePicker>{dia}</TextTimePicker>
              </PickerSelect>
            </TouchDateTime>

            <TouchDateTime onPress={() => (fadeAnimAux ? fadeIn() : fadeOut())}>
              <PickerSelect
                style={{
                  height: fadeAnim.interpolate({
                    inputRange: [32, 100],
                    outputRange: [32, 100],
                    extrapolate: 'clamp',
                  }),
                }}
              >
                {color === '' ? (
                  <Feather name="tag" size={20} color="#6d5dcf" />
                ) : (
                  <CategoriaBolinha backgroundColor={color} />
                )}
                <TextTimePicker>{categoria}</TextTimePicker>
                <CategoriaSelectArea
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
                  <CategoriaSelect
                    data={categorias}
                    keyExtractor={(item) => String(item.titulo)}
                    renderItem={({ item }) => (
                      <CategoriaButton
                        onPress={() => {
                          setCategoria(item.titulo);
                          setColor(item.color);
                        }}
                        key={item.titulo}
                      >
                        <CategoriaBolinha backgroundColor={item.color} />
                        <TextTimePicker>{item.titulo}</TextTimePicker>
                      </CategoriaButton>
                    )}
                  />
                </CategoriaSelectArea>
              </PickerSelect>
            </TouchDateTime>

            <TouchDateTime onPress={showTimepicker}>
              <PickerSelect>
                <Feather name="clock" size={20} color="#6d5dcf" />
                <TextTimePicker>{hora}</TextTimePicker>
              </PickerSelect>
            </TouchDateTime>
          </PickerArea>
          {show && (
            <DateTimePicker
              testID="dateTimePicker"
              value={date}
              mode={mode}
              display={display}
              is24Hour
              onChange={onChange}
            />
          )}
        </Box>
        <Submit>
          <WhiteText>Continuar</WhiteText>
        </Submit>
      </Area>
    </Container>
  );
};

export default Criar;
