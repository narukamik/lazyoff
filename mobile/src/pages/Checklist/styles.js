import styled from 'styled-components/native';

const top = 50;
const left = 15;

export const Header = styled.View`
  padding: 150px 0 0;
  background-color: #fff;
`;

export const Area = styled.View`
  position: relative;
  flex: 1;
  align-items: center;
  background-color: #F7FAFC;
  padding: ${top}px ${left}px 30px;
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

export const Text = styled.Text`
  width: 80%;
  margin-left: 32px;
  padding: 10px 0px 0px;
  font-weight: bold;
  font-size: 20px;
  margin-right: 100px;
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
  color: #0E0B1A;
  opacity: 1;
  margin-left: 30px;
  margin-top: 20%;
`;

