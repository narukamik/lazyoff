import React from 'react';
import Container from '~/components/Container';
import { Area, PurpleText, WhiteText, SignIn, SignUp } from './styles';

const Perfil = ({ navigation }) => {
  function handleNavigation(routeName) {
    navigation.navigate(routeName);
  }

  return (
    <Container>
      <Area>
        <SignIn onPress={() => handleNavigation('SignIn')}>
          <PurpleText>SignIn</PurpleText>
        </SignIn>
        <SignUp onPress={() => handleNavigation('SignUp')}>
          <WhiteText>SignUp</WhiteText>
        </SignUp>
      </Area>
    </Container>
  );
};

export default Perfil;
