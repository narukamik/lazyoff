import styled from 'styled-components/native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { LinearGradient } from 'expo-linear-gradient';
import colors from '~/config/ColorConfig';

export const ContainerC = styled(SafeAreaView)`
  flex: 1;
  /* background-color: #6d5dcf; */
`;

export const ContainerA = styled(LinearGradient).attrs({
  colors: colors.bgLinearHeader,
  start: [0, 0],
  end: [1, 0],
})`
  flex: 1;
`;
