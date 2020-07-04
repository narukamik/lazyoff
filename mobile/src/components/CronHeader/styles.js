import styled from 'styled-components/native';
import { Feather } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import colors from '~/config/ColorConfig';

export const Container = styled(LinearGradient).attrs({
  colors: [colors.bgLinearHeader.light, colors.bgLinearHeader.dark],
  start: [0, 1],
  end: [1, 0],
})`
  width: 100%;
  margin-bottom: auto;
  padding: 40px 10px 30px;
`;

export const Button = styled.TouchableOpacity``;

export const AreaTitle = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: auto;
`;

export const Title = styled.Text`
  font-size: 20px;
  font-weight: bold;
  color: #fff;
`;

export const SmallTitle = styled.Text`
  text-align: left;
  font-size: 16px;
  color: #fff;
`;

export const Icon = styled(Feather)``;
