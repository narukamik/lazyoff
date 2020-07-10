import React, { useState } from 'react';
import { Feather } from '@expo/vector-icons';
import DateTimePicker from '@react-native-community/datetimepicker';
import Container from '~/components/Container';
import { TaskService } from '~/services/tasks'
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
} from './styles';

const Criar = ({ navigation }) => {
  const [date, setDate] = useState(new Date());
  const [mode, setMode] = useState('date');
  const [show, setShow] = useState(false);
  const [display, setDisplay] = useState('default');
  const [dia, setDia] = useState('Dia');
  const [hora, setHora] = useState('Hora');

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShow(Platform.OS === 'ios');
    setDate(currentDate);
    const dados = {
      dia: currentDate.toLocaleDateString(),
      hora: currentDate.toLocaleTimeString()
    }
    setDia(dados.dia);
    setHora(dados.hora);
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

            <TouchDateTime>
              <PickerSelect>
                <Feather name="tag" size={20} color="#6d5dcf" />
                <TextTimePicker>Categoria</TextTimePicker>
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
