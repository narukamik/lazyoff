import React from 'react';
import Container from '~/components/Container';
import { 
  Area,
  Background,
  InputDiv,
  Divider, 
  PurpleText,
  WhiteText,
  SignIn,
  SignUp
 } from './styles';

const Perfil = ({ navigation }) => {
  function handleNavigation(routeName) {
    navigation.navigate(routeName);
  }

const logo = { uri: "~/assets/logo.png" };

return (
  <Container>
      <Area>
       <Background source={logo}/>
          <SignIn onPress={() => handleNavigation('SignIn')}>
            <WhiteText>Sign In</WhiteText>
          </SignIn>
          <Divider/>
          <SignUp onPress={() => handleNavigation('SignUp')}>
            <PurpleText>Sign Up</PurpleText>
          </SignUp>
     </Area>
  </Container>
  );
};

export default Perfil;
