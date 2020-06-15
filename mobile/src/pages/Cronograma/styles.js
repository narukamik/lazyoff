import styled from 'styled-components/native';

const top = 50;
const bottom = 180;
const left = 15;

export const Area = styled.View`
  position: relative;
  flex: 1;
  align-items: center;
  background-color: #fff;
  border-top-right-radius: 20px;
  border-top-left-radius: 20px;
  padding: ${top}px ${left}px 30px;
`;

export const VerticalLine = styled.View`
  position: absolute;
  top: ${top}px;
  left: ${left + 10}px;
  bottom: ${bottom}px;
  width: 1px;
  height: 100%;
  background: #ccc;
`;

export const Box = styled.View`
  position: relative;
  width: 100%;
  padding-left: 40px;
  margin-bottom: 30px;
  align-items: flex-start;
  justify-content: flex-start;
`;

export const CheckArea = styled.View`
  position: absolute;
  top: 0px;
  left: 0px;
  width: 20px;
  height: 20px;
  margin-bottom: 30px;
  background-color: #f00;
`;

export const Time = styled.Text`
  font-size: 14px;
  color: #000;
  width: 100%;
  margin-bottom: 8px;
`;

export const Task = styled.View`
  padding: 10px;
  flex-direction: row;
  border-radius: 3px;
  background-color: #ccc;
  width: 100%;
`;
export const Square = styled.View`
  width: 20px;
  height: 20px;
  border: 1px solid #000;
  border-radius: 2px;
`;

export const TextInfos = styled.View`
  padding: 0 10px;
`;

export const Title = styled.Text`
  font-size: 14px;
  width: 100%;
`;

export const Categoria = styled.Text`
  font-size: 12px;
  color: #aaa;
  width: 100%;
`;
