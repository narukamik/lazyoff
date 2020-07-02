import styled from 'styled-components/native';
import Input from 'react-native-elements';
import colors from '~/config/ColorConfig';

export const Area = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  background-color: white;
`;

export const Title = styled.Text`
  font-size: 25px;
  color: ${colors.primary};
  margin-bottom: 15%
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
  border-radius: 5px;
  padding: 2.5% 35%;
  background-color: ${colors.primary};
`;

export const WhiteText = styled.Text`
  color: white;
`;

export const Divider = styled.View`
  height: 3%;
`;

