import styled from 'styled-components/native';

export const Box = styled.View`
  margin-top: 45%;
  position: absolute;
  background-color: #F7FAFC;
  height: 100%;
  width: 100%;  
`;

export const PickerArea = styled.View`
  flex-direction: row;
  width: 100%;
  justify-content: center;
`;

export const PickerSelect = styled.View`
  margin: 5px;
  height: 32px;
  width: 100px;
  background-color: transparent;
  color: #8867DD;
  font-size: 12px;
`;

export const InputArea = styled.View`
  top: 32px;
  flex-direction: row;
  align-items: center;
  margin: 0 32px;
`;

export const Input = styled.TextInput`
  font-size: 18px;
  width: 100%;
  padding-right: 6px;
`;

export const BtnAdd = styled.TouchableOpacity`
  flex: 1;
  border-radius: 8px;
`;

export const TextAdd = styled.Text`
  width: 100%;
  color: white;
  background-color: #6d5dcf;
  font-size: 21px;
  border-radius: 8px;
  height: 32px;
  text-align: center;
`;