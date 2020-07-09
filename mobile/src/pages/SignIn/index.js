import React, { useState } from 'react';
import { Feather } from '@expo/vector-icons';
import { Input } from 'react-native-elements';
import { basename } from 'path';
import Container from '~/components/Container';
import colors from '~/config/ColorConfig';
import ButtonBack from '~/components/ButtonBack';
import api from '~/services/api';
import { Area, Submit, WhiteText, Title } from './styles';

const SignIn = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const login = async () => {
    if (email !== '' && password !== '') {
      const response = await api.post('login', {
        email,
        password,
      });
      console.log(response);
    }
  };

  return (
    <Container>
      <ButtonBack navigation={navigation} />
      <Area>
        <Title>LAZYOFF</Title>
        <Input
          label="Email"
          rightIcon={
            <Feather name="at-sign" size={24} color={`${colors.primary}`} />
          }
          labelStyle={{
            marginLeft: 20,
            marginBottom: 10,
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
            color: 'grey',
          }}
          onChangeText={setEmail}
        />
        <Input
          label="Senha"
          secureTextEntry
          rightIcon={
            <Feather name="lock" size={24} color={`${colors.primary}`} />
          }
          labelStyle={{
            marginLeft: 20,
            marginBottom: 5,
            color: `grey`,
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
          onChangeText={setPassword}
        />
        <Submit onPress={() => login}>
          <WhiteText>Continuar</WhiteText>
        </Submit>
      </Area>
    </Container>
  );
};

export default SignIn;
