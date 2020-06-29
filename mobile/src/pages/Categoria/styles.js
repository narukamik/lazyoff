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
  padding: ${top}px ${left}px 30px;
`;
