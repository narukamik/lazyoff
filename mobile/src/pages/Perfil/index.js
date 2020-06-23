import React from 'react';
import Container from '~/components/Container';
import {
 Area,
 PurpleText,
 WhiteText,
 SignIn,
 SignUp
} from './styles'
import { useNavigation } from '@react-navigation/native';

const Perfil = () => {
    const navigation = useNavigation();

    function navigateToSignUp() {
        navigation.navigate('SignUp');
    }

    function navigateToSignIn() {
        navigation.navigate('SignIn');
    }

    return (
        <Container>
            <Area>
                <SignIn onPress={() => navigateToSignIn()}>
                    <PurpleText>
                        SignIn
                    </PurpleText>
                </SignIn>
                <SignUp onPress={() => navigateToSignUn()}>
                    <WhiteText>
                        SignUp
                    </WhiteText>
                </SignUp>
            </Area>
        </Container>
    );
};

export default Perfil;