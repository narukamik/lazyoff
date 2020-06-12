import React from 'react';
import Container from '~/components/Container';
import {Area, InputRow, Title, DefaultInput, PasswordInput} from './styles';
import { AntDesign, Ionicons } from '@expo/vector-icons';

const Cronograma = () => {
  return (
    <Container>
      <Area>
        <Title>
          Crie uma conta para você.
        </Title>
        <InputRow>
          <Ionicons
          name="md-person"
          size={24} color="black"
          />
          <DefaultInput 
          placeholder = {'Nome'}
          />
        </InputRow>
        <InputRow>
          <AntDesign name="mail" 
          size={24} color="black"
          />
          <DefaultInput
           placeholder={'Email'}
           />
        </InputRow>
        <InputRow>        
          <AntDesign name="mail" 
          size={24} color="black"
          />
          <DefaultInput
           placeholder={'Confirmar email'}
          />
        </InputRow>
        <InputRow>
          <AntDesign name="lock"
          size={24} color="black"
          />
          <PasswordInput 
          placeholder={'Senha'}
          />
        </InputRow>
        <InputRow>
          <AntDesign name="lock"
          size={24} color="black"
          />
          <PasswordInput 
          placeholder={'Confirmar senha'}
          />
        </InputRow>
      </Area>
    </Container>
  );
};

export default Cronograma;
