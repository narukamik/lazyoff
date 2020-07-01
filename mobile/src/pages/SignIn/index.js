import React from 'react';
import { Feather } from '@expo/vector-icons';
import Container from '~/components/Container';

import { Area, Divider, Submit, Input, WhiteText, Title } from './styles';

const SignIn = () => {
  return (
    <Container>
      <Area>
        <Title>LAZYOFF</Title>
        <Input
          label="Email"
          iconClass={Feather}
          iconName="at-sign"
          labelStyle={{ color: '#91627b' }}
          inputStyle={{ color: '#91627b' }}
          labelContainerStyle={{ padding: 5 }}
          iconContainerStyle={{ padding: 5 }}
        />
        <Input
          label="Senha"
          iconClass={Feather}
          iconName="lock"
          labelStyle={{ color: '#91627b' }}
          inputStyle={{ color: '#91627b' }}
          labelContainerStyle={{ padding: 5 }}
          iconContainerStyle={{ padding: 5 }}
        />
        <Divider />
        <Submit>
          <WhiteText>Continuar</WhiteText>
        </Submit>
      </Area>
    </Container>
  );
};

export default SignIn;
