import React from 'react';
import Container from '~/components/Container';
import { Feather } from '@expo/vector-icons';

import {
  Area,
  Divider,
  Submit,
  Input,
  WhiteText,
  Title,
} from './styles';

const SignUp = () => {
  return (
    <Container>
      <Area>
        <Title>LAZYOFF</Title>
        <Input
        label={'Nome'}
        iconClass={Feather}
        iconName={'at-sign'}
        labelStyle={{ color: '#91627b' }}
        inputStyle={{ color: '#91627b' }}
        labelContainerStyle={{ padding: 5 }}
        iconContainerStyle={{ padding: 5 }}
        />
        <Input
        label={'Email'}
        iconClass={Feather}
        iconName={'at-sign'}
        labelStyle={{ color: '#91627b' }}
        inputStyle={{ color: '#91627b' }}
        labelContainerStyle={{ padding: 5 }}
        iconContainerStyle={{ padding: 5 }}
        />
        <Input
        label={'Senha'}
        iconClass={Feather}
        iconName={'lock'}
        labelStyle={{ color: '#91627b' }}
        inputStyle={{ color: '#91627b' }}
        labelContainerStyle={{ padding: 5 }}
        iconContainerStyle={{ padding: 5 }}
        />
        <Input
        label={'Confirmar senha'}
        iconClass={Feather}
        iconName={'lock'}
        labelStyle={{ color: '#91627b' }}
        inputStyle={{ color: '#91627b' }}
        labelContainerStyle={{ padding: 5 }}
        iconContainerStyle={{ padding: 5 }}
        />
        <Divider/>
          <Submit>
            <WhiteText>Continuar</WhiteText>
          </Submit>
      </Area>
    </Container>
  );
};

export default SignUp;
