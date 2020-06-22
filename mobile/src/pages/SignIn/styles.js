import styled from 'styled-components/native';
import { Feather } from '@expo/vector-icons';

export const Area = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  background-color: gray;
`;

export const Title = styled.Text`
  font-size: 32px;
`;

export const InputRow = styled.View`
  flex: 1;
  flex-direction: row;
  order-bottom-Width: 1;
  border-color: '#000';
`;
export const Icon = styled(Feather)` `;

export const DefaultInput = styled.TextInput`
  height: 40px;
  font-size: 16px;
  border-radius: 5px;
  border: 2px solid rgb(76, 53, 194);
`;

export const PasswordInput = styled.TextInput`
  flex: 1;
  height: 40px;
  font-size: 16px;
  border-radius: 5px;
  border: 2px solid rgb(76, 53, 194);
`;
