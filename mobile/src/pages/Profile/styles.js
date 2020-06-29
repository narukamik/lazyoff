import styled from 'styled-components/native';
import colors from '~/config/ColorConfig';

export const Area = styled.View`
  width: 100%;
  height: 100%;
  background-color: white;
`;

export const HeaderStatus = styled.View`
  height: 100px;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 100%;
`;

export const Status = styled.View`
  justify-content: center;
  align-items: center;
  flex-direction: row;
  margin: 0 8px;
`;

export const Coins = styled.View`
  background-color: gold;
  border-radius: 6px;
  height: 30px;
  padding: 0 16px;
  justify-content: center;
`;

export const Coin = styled.Image`
  width: 30px;
  height: 30px;
`;

export const TextCoins = styled.Text`
  color: white;
  font-size: 20px;
  font-weight: bold;
  text-align: center;
`;

export const Photo = styled.Image`
  width: 40px;
  height: 40px;
  border-radius: 50px;
  border-width: 2px;
  border-color: gold;
`;

export const TextLevel = styled.Text`
  color: white;
  font-size: 12px;
  font-weight: bold;
  text-align: center;
`;

export const Level = styled.View`
  background-color: #6d5dcf;
  border-top-right-radius: 6px;
  border-bottom-right-radius: 6px;
  padding: 0 5px;
  height: 25px;
  justify-content: center;
  
`;

export const Value = styled.View`
  justify-content: center;
  height: 25px;
`;

export const TextValue = styled.Text`
  color: #7E6DDB;
  font-weight: bold;
  font-size: 20px;
  text-align: right;
`;

export const Trophy = styled.Image`
  width: 30px;
  height: 30px;
`;