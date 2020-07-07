import styled from 'styled-components/native';

export const Area = styled.View`
  position: relative;
  flex: 1;
  align-items: center;
  background-color: #f7fafc;
  padding: 20px 15px;
`;

export const ScrollArea = styled.FlatList.attrs({
  showsVerticalScrollIndicator: false,
})`
  position: relative;
  width: 100%;
`;
