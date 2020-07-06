import React from 'react';
import { Feather } from '@expo/vector-icons';
import Container from '~/components/Container';
import colors from '~/config/ColorConfig';
import {
  Area,
  ButtonReturn,
  Background,
  InputDiv,
  Divider,
  PurpleText,
  WhiteText,
  SignIn,
  SignUp,
} from './styles';

const Perfil = ({ navigation }) => {
  function handleNavigation(routeName) {
    navigation.navigate(routeName);
  }

  const logo = { uri: '~/assets/logo.png' };

  return (
    <Container>
      <ButtonReturn onPress={() => navigation.goBack()}>
        <Feather name="chevron-left" size={30} color={colors.primary} />
      </ButtonReturn>
      <Area>
        <Background source={logo} />
        <SignIn onPress={() => handleNavigation('SignIn')}>
          <WhiteText>Sign In</WhiteText>
        </SignIn>
        <Divider />
        <SignUp onPress={() => handleNavigation('SignUp')}>
          <PurpleText>Sign Up</PurpleText>
        </SignUp>
      </Area>
    </Container>
  );
};

export default Perfil;
