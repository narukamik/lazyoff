import React from 'react';
import { Input } from 'react-native-elements';
import { Feather } from '@expo/vector-icons';
import Container from '~/components/Container';
import colors from '~/config/ColorConfig';
import { Area, Divider, Submit, WhiteText, Title } from './styles';
import ButtonBack from '~/components/ButtonBack';

const SignIn = ({ navigation }) => {
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
