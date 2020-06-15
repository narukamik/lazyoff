import styled from 'styled-components/native';
import { Feather } from '@expo/vector-icons';

export const Area = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  background-color: gray;
`;

export const InputRow = styled.View`
  flex: 1;
  flex-direction: row;
  justify-content: space-between;
`;

export const Title = styled.Text`
  font-size: 32px;
`;

export const Icon = styled(Feather)` `;

export const DefaultInput = styled.TextInput`
  height: 40px;
  font-size: 16px;
`;

export const PasswordInput = styled.TextInput`
  height: 40px;
  font-size: 16px;
`;
