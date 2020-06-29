import styled from 'styled-components/native';
import { Feather } from '@expo/vector-icons';

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
export const Icon = styled(Feather)``;

export const DefaultInput = styled.TextInput`
  height: 40px;
  font-size: 16px;
  border-radius: 5px;
  border-width: 2px;
  border: solid 1px #6C5DCE;
`;

export const PasswordInput = styled.TextInput`
  height: 40px;
  font-size: 16px;
  border-radius: 5px;
  border-width: 2px;
  border: solid 1px #6C5DCE;
`;

export const Submit = styled.TouchableOpacity`
  border-radius: 3px;
  padding-vertical: 2.5%;
  padding-horizontal: 35%;
  background-color: #6C5DCE;
`
