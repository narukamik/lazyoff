import styled from 'styled-components/native';

export const Box = styled.View`
  margin-top: 45%;
  position: absolute;
  background-color: #F7FAFC;
  height: 100%;
  width: 100%;  
  align-items: center;
  justify-content: center;
`;

export const CheckArea = styled.View`
  width: 100%;
  height: 100%;
  padding: 32px;
`;

export const CheckText = styled.Text`
  font-size: 15px;
`;

export const CheckItem = styled.View`
  flex-direction: row;
  align-items: center;
  margin: 4px 0;
`;

export const Notes = styled.View`
  flex-direction: row;
  align-items: center;
  background-color: #6d5dcf;
  width: 100%;
  height: 50px;
  padding: 16px;
`;

export const NotesText = styled.Text`
  font-size: 14px;
  color: #fff;
  padding-left: 16px;
  padding-right: 54px;
  font-weight: bold;
  width: 100%;
`;

export const NotesButton = styled.TouchableOpacity`
  left: -48px;
`;