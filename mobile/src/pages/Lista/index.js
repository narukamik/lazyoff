import React, { useState } from 'react';
import { Feather } from '@expo/vector-icons';
import Container from '~/components/Container';
import { 
  Area,
  AreaText,
  Box,
  InputArea,
  Input,
  PickerArea,
  Picker
} from './styles'

const Lista = () => {
  const [categoria, setCategoria] = useState('categoria');
  const [dia, setDia] = useState('dia');
  const [hora, setHora] = useState('hora');

  return (
    <Container>
      <Area>
        <AreaText>Dê um nome a sua nova lista</AreaText>
        <Box>
          <InputArea>
            <Input placeholder="Digite o nome da sua lista..."/>
            <Feather name="smile" size={24} color="#6d5dcf" />
          </InputArea>
          <PickerArea>

            <Picker selectedValue={dia} onValueChange={(itemValue, itemIndex) => setDia(itemValue)}>
              <Picker.Item label="Dia" value="dia" />
              <Picker.Item label="01" value="01" />
              <Picker.Item label="02" value="02" />
            </Picker>

            <Picker selectedValue={categoria} onValueChange={(itemValue, itemIndex) => setCategoria(itemValue)}>
              <Picker.Item label="Categoria" value="categoria" />
              <Picker.Item label="Casa" value="casa" />
              <Picker.Item label="Trabalho" value="trabalho" />
            </Picker>

            <Picker selectedValue={hora} onValueChange={(itemValue, itemIndex) => setHora(itemValue)}>
              <Picker.Item label="Hora" value="hora" />
              <Picker.Item label="08:00" value="08:00" />
              <Picker.Item label="09:00" value="09:00" />
            </Picker>
            
          </PickerArea>
        </Box>
      </Area>
    </Container>
  );
};

export default Lista;
