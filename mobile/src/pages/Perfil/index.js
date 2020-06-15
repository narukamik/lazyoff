import React from 'react';
import Container from '~/components/Container';
import { Area, InputRow, Icon, Title, DefaultInput, PasswordInput } from './styles';

const Cronograma = () => {
  return (
    <Container>
      <Area>
        <Title>Crie uma conta para você.</Title>
        <InputRow>
          <Icon name="user" size={24} color="black" />
          <DefaultInput placeholder="Nome" />
        </InputRow>
        <InputRow>
          <Icon name="mail" size={24} color="black" />
          <DefaultInput placeholder="Email" />
        </InputRow>
        <InputRow>
          <Icon name="mail" size={24} color="black" />
          <DefaultInput placeholder="Confirmar email" />
        </InputRow>
        <InputRow>
          <Icon name="lock" size={24} color="black" />
          <PasswordInput placeholder="Senha" />
        </InputRow>
        <InputRow>
          <Icon name="lock" size={24} color="black" />
          <PasswordInput placeholder="Confirmar senha" />
        </InputRow>
      </Area>
    </Container>
  );
};

export default Cronograma;
