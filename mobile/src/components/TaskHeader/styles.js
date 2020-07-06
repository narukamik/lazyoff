import styled from 'styled-components/native';

export const Container = styled.View`
  width: 100%;
  margin-bottom: auto;
  padding: 40px 10px 0;
`;

export const ButtonReturn = styled.TouchableOpacity`
  position: absolute;
  top: 35px;
  left: 0px;
  z-index: 3;
`;

export const Title = styled.Text`
  text-align: center;
  font-size: 18px;
  font-weight: bold;
  color: #000;
  margin-bottom: 30px;
`;

export const AreaInfos = styled.View`
  width: 100%;
  margin-bottom: auto;
  padding: 0 10px 15px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const Area = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: center;
  height: 30px;
  width: 28%;
`;

export const Nivel = styled.View`
  align-items: center;
  width: 10px;
  height: 10px;
  border-radius: 25px;
  background-color: #e67373;
  margin-right: 4px;
`;

export const AreaText = styled.Text`
  align-items: center;
  justify-content: center;
  text-align: center;
  font-size: 12px;
  color: #b6b9ba;
`;
