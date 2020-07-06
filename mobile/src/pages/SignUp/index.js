import React from 'react';
import { Feather } from '@expo/vector-icons';
import { Input } from 'react-native-elements';
import Container from '~/components/Container';
import colors from '~/config/ColorConfig';
import ButtonBack from '~/components/ButtonBack';

import { Area, Divider, Submit, WhiteText, Title } from './styles';

const SignUp = ({ navigation }) => {
  return (
    <Container>
      <ButtonBack navigation={navigation} />
      <Area>
        <Title>LAZYOFF</Title>
        <Input
          label="Nome"
          rightIcon={
            <Feather name="user" size={24} color={`${colors.primary}`} />
          }
          labelStyle={{
            marginLeft: 20,
            marginBottom: 8,
            color: 'grey',
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
            color: `${colors.primary}`,
          }}
          rightIconContainerStyle={{
            paddingRight: 15,
          }}
        />
        <Input
          label="Email"
          rightIcon={
            <Feather name="at-sign" size={24} color={`${colors.primary}`} />
          }
          labelStyle={{
            marginLeft: 20,
            marginBottom: 8,
            color: 'grey',
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
            color: `${colors.primary}`,
          }}
          rightIconContainerStyle={{
            paddingRight: 15,
          }}
        />
        <Input
          label="Senha"
          secureTextEntry
          rightIcon={
            <Feather name="lock" size={24} color={`${colors.primary}`} />
          }
          labelStyle={{
            marginLeft: 20,
            marginBottom: 8,
            color: 'grey',
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
            color: `${colors.primary}`,
          }}
          rightIconContainerStyle={{
            paddingRight: 15,
          }}
        />
        <Input
          label="Confirmar senha"
          secureTextEntry
          rightIcon={
            <Feather name="lock" size={24} color={`${colors.primary}`} />
          }
          labelStyle={{
            marginLeft: 20,
            marginBottom: 8,
            color: 'grey',
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
            color: `${colors.primary}`,
          }}
          rightIconContainerStyle={{
            paddingRight: 15,
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

export default SignUp;
