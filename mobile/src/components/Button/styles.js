import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';
import colors from '~/config/ColorConfig';

export const Container = styled(RectButton)`
  background: ${colors.primary};
  border-radius: 6px;
  width: 300px;
  height: 44px;
  align-items: center;
  justify-content: center;
`;

export const Text = styled.Text`
  color: #fff;
  font-size: 16px;
`;
