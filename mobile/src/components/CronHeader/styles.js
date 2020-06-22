import styled from 'styled-components/native';
import { Feather } from '@expo/vector-icons';

export const Container = styled.View`
  width: 100%;
  background-color: #6d5dcf;
  margin-bottom: auto;
  padding: 40px 10px 0;
`;

export const Button = styled.TouchableOpacity`
  
`;

export const SmallTitle = styled.Text`
  text-align: left;
  font-size: 18px;
  color: #fff;
`;
export const AreaTitle = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  background-color: #6d5dcf;
  margin-bottom: auto;
`;

export const Title = styled.Text`
  font-size: 28px;
  font-weight: bold;
  color: #fff;
  margin-bottom: 30px;
`;

export const Icon = styled(Feather)``;
