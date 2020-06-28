import styled from 'styled-components/native';
import colors from '~/config/ColorConfig';

export const Area = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  background-color: gray;
`;

export const Background = styled.ImageBackground`
  width: 100%;
  height: 15%;
`;

export const SignIn = styled.TouchableOpacity`
  position: absolute;
  color: ${colors.primary};
  height: 15px;
  width: 90%;
`;

export const PurpleText = styled.Text`
  color: ${colors.primary};
`;

export const WhiteText = styled.Text`
  color: white;
`;

export const SignUp = styled.TouchableOpacity`
  height: 15px;
  width: 90%;
  color: white;
`;
