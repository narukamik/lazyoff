import styled from 'styled-components/native';
import colors from '~/config/ColorConfig';

export const Area = styled.View`
  flex: 1;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: white;
`;

export const Background = styled.ImageBackground`
  width: 100%;
  height: 15%;
`;

export const InputDiv = styled.View``;

export const SignUp = styled.TouchableOpacity`
  border-radius: 3px;
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
  border-radius: 3px;
  padding: 2.5% 35%;
  background-color: ${colors.primary};
`;

export const WhiteText = styled.Text`
  color: white;
`;
