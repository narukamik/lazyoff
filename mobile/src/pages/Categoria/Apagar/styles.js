import styled from 'styled-components/native';
import { Feather } from '@expo/vector-icons';
import Button from '~/components/Button';
import colors from '~/config/ColorConfig';

export const Container = styled.View`
  flex: 1;
  background-color: #fff;
  align-items: center;
  justify-content: center;
`;

export const Title = styled.Text`
  font-size: 20px;
  color: #333;
  text-align: justify;
  padding-left: 50px;
  padding-right: 50px;
  margin-bottom: 70px;
`;

export const Strong = styled.Text`
  color: #784a78;
  font-weight: bold;
`;

export const ButtonReturn = styled.TouchableOpacity`
  position: absolute;
  top: 35px;
  left: 0px;
  z-index: 3;
`;

export const Icon = styled(Feather)`
  margin-bottom: 50px;
  color: ${colors.primary};
`;

export const RemoveButton = styled(Button).attrs({ textcolor: '#333' })`
  margin-bottom: 50px;
  background-color: ${colors.gray};
`;

export const CancelButton = styled(Button)``;
