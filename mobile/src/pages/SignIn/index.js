import React from 'react';
import Container from '~/components/Container';
import colors from '~/config/ColorConfig';
import { Input } from 'react-native-elements';
import { Feather } from '@expo/vector-icons';
import {
  Area,
  Divider,
  Submit,
  InputWithBorder,
  WhiteText,
  Title,
} from './styles';

const SignIn = () => {
  return (
    <Container>
      <Area>
        <Title>LAZYOFF</Title>
        <Input
          label="Email"
          rightIcon={
            <Feather name="at-sign" size={24} color={`${colors.primary}`} />
          }
          labelStyle={{
            marginLeft: 20,
            marginBottom: 8,
            color: `${colors.primary}`,
          }}
          inputContainerStyle={{
            marginHorizontal: 20,
            backgroundColor: 'white',
            borderColor: `${colors.primary}`,
            borderRadius: 5,
            borderWidth: 2.5,
            borderBottomWidth: 2.5,
          }}
          inputStyle={{
            marginLeft: 15,
            color: `${colors.primary}`
          }}
          rightIconContainerStyle={{
            paddingRight: 15
          }}
          
        />
        <Input
          label="Senha"
          secureTextEntry={true}
          rightIcon={
            <Feather name="lock" size={24} color={`${colors.primary}`} />
          }
          labelStyle={{
            marginLeft: 20,
            marginBottom: 8,
            color: `${colors.primary}`,
          }}
          inputContainerStyle={{
            marginHorizontal: 20,
            backgroundColor: 'white',
            borderColor: `${colors.primary}`,
            borderRadius: 5,
            borderWidth: 2.5,
            borderBottomWidth: 2.5,
          }}
          inputStyle={{
            marginLeft: 15,
            color: `${colors.primary}`
          }}
          rightIconContainerStyle={{
            paddingRight: 15
          }}
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
