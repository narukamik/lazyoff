import styled from 'styled-components/native';
import colors from '~/config/ColorConfig';

export const Area = styled.View`
  flex: 1;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: white;
`;

export const ButtonReturn = styled.TouchableOpacity`
  position: absolute;
  top: 35px;
  left: 0px;
  z-index: 3;
`;

export const Background = styled.ImageBackground`
  width: 100%;
  height: 100%;
  resize-mode: cover;
`;

export const InputDiv = styled.View``;

export const SignUp = styled.TouchableOpacity`
  border-radius: 5px;
  padding: 2.5% 35%;
  border: solid 1px ${colors.primary};
`;

export const PurpleText = styled.Text`
  color: ${colors.primary};
`;

export const Divider = styled.View`
  height: 3%;
`;

export const SignIn = styled.TouchableOpacity`
  border-radius: 5px;
  padding: 2.5% 35%;
  background-color: ${colors.primary};
  border: solid 1px ${colors.primary};
`;

export const WhiteText = styled.Text`
  color: white;
`;

export const Logo = styled.Image`
  width: 90%;
  height: 70%;
  resize-mode: center;
  position: absolute;
  align-self: center;
`;

export const LogoArea = styled.View`
  background-color: black;
  height: 70%;
  justify-content: center;
`;