import React from 'react';
import Container from '~/components/Container';
import { 
  Area,
  InputRow,
  Icon,
  Title,
  DefaultInput,
  PasswordInput
} from './styles';

const SignUp = () => {
  return (
    <Container>
      <Area>
        <Title>LAZYOFF</Title>
          <DefaultInput label="Nome" />
        <InputRow>
          <DefaultInput label="Email"/>
          <Icon name="at-sign" size={20} color="purple"/>
        </InputRow>
        <InputRow>
          <PasswordInput
          secureTextEntry={true}
          password={true}
          label="Password"
          placeholder="•••••••••"/>
          <Icon name="lock" size={20} color="purple" />
        </InputRow>
      </Area>
    </Container>
  );
};

export default SignUp;
