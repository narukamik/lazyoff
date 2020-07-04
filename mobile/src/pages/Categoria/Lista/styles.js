import styled from 'styled-components/native';
import { LinearGradient } from 'expo-linear-gradient';
import colors from '~/config/ColorConfig';

const top = 50;
const left = 15;

export const Separar = styled.View`]
  padding-bottom: 20px;
`;

export const Bolinha= styled.View`]
  width: 20px;
  height: 20px;
  border-radius: 50px;
  margin-right: 340px;
`;

export const Checar = styled.View`]
`;

export const Text = styled.Text`
  width: 80%;
  padding: 10px 0px 0px;
  font-size: 16px;
  color: #6D5DCF;
  margin-right: 30px;
  margin-top: -30px;
`;


export const Header = styled.View`
  padding: 150px 0 0;
  background-color: #fff;
`;

export const Area = styled.View`
  position: relative;
  flex: 1;
  align-items: center;
  background-color: #F7FAFC;
  padding: ${30}px ${40}px 30px;
`;

export const Box = styled.View`
  margin-top: 45%;
  position: absolute;
  background-color: #F7FAFC;
  height: 100%;
  width: 100%;  
  align-items: center;
  justify-content: center;
  padding: 30px;
`;

export const CheckArea = styled.View`
  margin-top: -30px;
  width: 100%;
  height: 15%;
`;

export const CheckText = styled.Text`
  font-size: 16px;
`;

export const CheckItem = styled.View`
  flex-direction: row;
  align-items: center;
  margin: 4px 0;
`;

export const Div = styled.View`
  margin-top: 32px;
  margin-right: 55%;
`;

export const HeaderTop = styled.View`
  top: 0px;
  left: -1px;
  width: 100%;
  height: 174px;
`;

export const Title = styled.Text`
  font-size: 22px;
  font-weight: bold;
  letter-spacing: 0px;
  color: #fff;
  opacity: 1;
  margin-left: 30px;
  margin-top: 20%;
`;

export const ScrollArea = styled.FlatList.attrs({
  showsVerticalScrollIndicator: false,
})`
  position: relative;
  flex: 1;
  width: 100%;
`;

