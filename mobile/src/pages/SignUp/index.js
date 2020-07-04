import React from 'react';
import { Feather } from '@expo/vector-icons';
import Container from '~/components/Container';

import { Area, Divider, Submit, Input, WhiteText, Title } from './styles';

const SignUp = () => {
  return (
    <Container>
      <Area>
        <Title>LAZYOFF</Title>
        <Input
          label="Nome"
<<<<<<< HEAD
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
            color: `${colors.primary}`
          }}
          rightIconContainerStyle={{
            paddingRight: 15
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
            color: `${colors.primary}`
          }}
          rightIconContainerStyle={{
            paddingRight: 15
          }}
        />
        <Input
          label="Confirmar senha"
          secureTextEntry={true}
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
            color: `${colors.primary}`
          }}
          rightIconContainerStyle={{
            paddingRight: 15
          }}
=======
          iconClass={Feather}
          iconName="at-sign"
          labelStyle={{ color: '#91627b' }}
          inputStyle={{ color: '#91627b' }}
          labelContainerStyle={{ padding: 5 }}
          iconContainerStyle={{ padding: 5 }}
        />
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
        <Input
          label="Confirmar senha"
          iconClass={Feather}
          iconName="lock"
          labelStyle={{ color: '#91627b' }}
          inputStyle={{ color: '#91627b' }}
          labelContainerStyle={{ padding: 5 }}
          iconContainerStyle={{ padding: 5 }}
>>>>>>> parent of 061cdc7... update signup screen and fix signin screen
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
