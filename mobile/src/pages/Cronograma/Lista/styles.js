import styled from 'styled-components/native';

const top = 50;
const bottom = 20;
const left = 15;

export const Area = styled.View`
  position: relative;
  flex: 1;
  align-items: center;
  background-color: #fff;
  border-top-right-radius: 20px;
  border-top-left-radius: 20px;
  padding: ${top}px 0px 30px;
`;

export const ScrollArea = styled.FlatList.attrs({
  showsVerticalScrollIndicator: false,
})`
  position: relative;
  flex: 1;
  width: 100%;
`;

export const VerticalLine = styled.View`
  position: absolute;
  top: ${top}px;
  bottom: ${bottom}px;
  left: ${left + 10}px;
  width: 1px;
  background: #ccc;
`;

export const CheckEndArea = styled.View`
  position: absolute;
  bottom: ${bottom}px;
  left: ${left}px;
  height: 20px;
  background-color: #fff;
  flex-direction: row;
  align-items: center;
  width: 100%;
`;

export const TextEnd = styled.Text`
  font-size: 12px;
  margin-left: 6px;
  color: #aaa;
  width: 100%;
`;
