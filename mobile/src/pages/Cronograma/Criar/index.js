import React, { useState } from 'react';
import { Feather } from '@expo/vector-icons';
import DateTimePicker from '@react-native-community/datetimepicker';
import Container from '~/components/Container';
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
  TouchDateTime
} from './styles';

const Criar = ({ navigation }) => {

  const [date, setDate] = useState(new Date());
  const [mode, setMode] = useState('date');
  const [show, setShow] = useState(false);
  const [display, setDisplay] = useState('default');

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShow(Platform.OS === 'ios');
    setDate(currentDate);
    console.log(selectedDate);
  };

  const showMode = currentMode => {
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

  return (
    <Container>
      <Area>
        <ButtonReturn onPress={() => navigation.goBack()}>
          <Feather name="chevron-left" size={30} color="#FFF" />
        </ButtonReturn>
        <AreaText>Dê um nome a sua nova lista</AreaText>
        <Box>
          <InputArea>
            <Input placeholder="Digite o nome da sua lista..." />
            <Feather name="smile" size={24} color="#6d5dcf" />
          </InputArea>
          <PickerArea>
            <TouchDateTime onPress={showDatepicker}>
              <PickerSelect>
                <Feather name="calendar" size={20} color="#6d5dcf" />
                <TextTimePicker>Dia</TextTimePicker>
              </PickerSelect>
            </TouchDateTime>

            <TouchDateTime >
              <PickerSelect>
                <Feather name="tag" size={20} color="#6d5dcf" />
                <TextTimePicker>Categoria</TextTimePicker>
              </PickerSelect>
            </TouchDateTime>

            <TouchDateTime onPress={showTimepicker}>
              <PickerSelect>
                <Feather name="clock" size={20} color="#6d5dcf" />
                <TextTimePicker>Hora</TextTimePicker>
              </PickerSelect>
            </TouchDateTime>
          </PickerArea>
          {show && (
            <DateTimePicker
              testID="dateTimePicker"
              value={date}
              mode={mode}
              display={display}
              is24Hour={true}
              onChange={onChange}
            />
          )}
        </Box>
      </Area>
    </Container>
  );
};

export default Criar;
