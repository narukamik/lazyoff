import styled from 'styled-components/native';
import { Kohana } from 'react-native-textinput-effects';
import colors from '~/config/ColorConfig';

export const Area = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  background-color: white;
  
`;

export const Title = styled.Text`
  font-size: 32px;
`;

export const InputRow = styled.View`
  flex: 1;
  flex-direction: row;
  border-bottom-width: 1;
  border-color: #000;
`;

export const DefaultInput = styled.TextInput`
  height: 40px;
  font-size: 16px;
  border-radius: 5px;
  border-width: 2px;
  border: solid 1px ${colors.primary};
`;

export const PasswordInput = styled.TextInput`
  height: 40px;
  font-size: 16px;
  border-radius: 5px;
  border-width: 2px;
  border: solid 1px ${colors.primary};
`;

export const Submit = styled.TouchableOpacity`
  border-radius: 3px;
  padding-vertical: 2.5%;
  padding-horizontal: 35%;
  background-color: ${colors.primary};
`;

export const WhiteText = styled.Text`
  color: white;
`;

export const Divider = styled.View`
  height:3%;
  display:block
`;


export const Input = styled(Kohana)`
  border: solid 1px ${colors.primary};
`