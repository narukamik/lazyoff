import React from 'react';
import Container from '~/components/Container';
import { Fumi } from 'react-native-textinput-effects';
import { Feather } from '@expo/vector-icons';

import {
  Area,
  Divider,
  Submit,
  Title,
} from './styles';

const SignIn = () => {
  return (
    <Container>
      <Area>
        <Title>LAZYOFF</Title>
        <Fumi
        label={'Email'}
        iconClass={Feather}
        iconName={'at-sign'}
        iconColor={'#6C5DCE'}
        iconSize={15}
        iconWidth={30}
        />
        <Divider/>
        <Fumi
        label={'Senha'}
        iconClass={Feather}
        iconName={'lock'}
        iconColor={'#6C5DCE'}
        iconSize={15}
        iconWidth={15}
        inputPadding={10}
        />
        <Divider/>
          <Submit>
            <Text>Sign Up</Text>
          </Submit>
      </Area>
    </Container>
  );
};

export default SignIn;
