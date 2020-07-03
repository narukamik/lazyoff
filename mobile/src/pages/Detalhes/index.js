import React, { useState } from 'react';

import { Feather } from '@expo/vector-icons';
import RNPickerSelect from 'react-native-picker-select';

import Container from '~/components/Container';
import TaskHeader from '~/components/TaskHeader';
import {
  Box,
  InputArea,
  Input,
  PickerArea,
  PickerSelect,
  BtnAdd,
  TextAdd
} from './styles';

const Detalhes = () => {

  const pickerStyle = {
    inputAndroid: {
      paddingHorizontal: 5,
      backgroundColor: 'white',
      height: 32,
      borderColor: '#6d5dcf',
      borderWidth: 1,
      borderRadius: 8,
      width: '100%',
    },
    iconContainer: {
      top: 4,
      right: 2,
    },
    placeholder: {
      color: '#6d5dcf',
      fontSize: 14,
      paddingRight: 24,
    },
  };

  return (
    <Container>
      <TaskHeader />
      <Box>
        <InputArea>
          <Input placeholder="Digite seu item ou tarefa" />
        </InputArea>
      </Box>
      
      <PickerArea>
        <PickerSelect>
          <RNPickerSelect
            placeholder={{ label: 'Dia', value: null }}
            useNativeAndroidPickerStyle={false}
            style={pickerStyle}
            Icon={() => {
              return <Feather name="calendar" size={23} color="#6d5dcf" />;
            }}
            onValueChange={(value) => console.log(value)}
            items={[
              { label: '12', value: '12' },
              { label: '13', value: '13' },
              { label: '14', value: '14' },
            ]}
          />
        </PickerSelect>
        
        <PickerSelect>
          <RNPickerSelect
            placeholder={{ label: 'Hora', value: null }}
            useNativeAndroidPickerStyle={false}
            style={pickerStyle}
            Icon={() => {
              return <Feather name="clock" size={23} color="#6d5dcf" />;
            }}
            onValueChange={(value) => console.log(value)}
            items={[
              { label: '18:00', value: '18h' },
              { label: '19:00', value: '19h' },
              { label: '20:00', value: '20h' },
            ]}
          />
        </PickerSelect>

        <PickerSelect>
          <BtnAdd>
            <TextAdd>+</TextAdd>
          </BtnAdd>
        </PickerSelect>
      </PickerArea>
    </Container>
  );
};

export default Detalhes;
