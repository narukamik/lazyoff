import styled from 'styled-components/native';

export const Area = styled.View`
  height: 100%;
  background-color: #6d5dcf;
`;
 
export const AreaText = styled.Text`
  padding: 64px 32px;
  color: white;
  font-size: 24px;
`;

export const Box = styled.View`
  margin-top: 45%;
  position: absolute;
  backgroundColor: #F7FAFC;
  height: 100%;
  width: 100%;
`;

export const InputArea = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin: 24px 32px;
  padding-right: 22px;
`;

export const Input = styled.TextInput`
  font-size: 18px;
  width: 100%;
  padding-right: 6px;
`;

export const PickerArea = styled.View`
  margin-top: 20px;
  flex-direction: row;
  width: 100%;
  justify-content: center;
`;

export const Picker = styled.Picker`
  margin: 5px;
  height: 50px;
  width: 100px;
  background-color: white;
  color: #8867DD;
  font-size: 12px;
`;
