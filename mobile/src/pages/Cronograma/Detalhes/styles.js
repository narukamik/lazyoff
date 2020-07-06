import styled from 'styled-components/native';
import colors from '~/config/ColorConfig';

export const Area = styled.View`
  flex: 1;
  background-color: #fff;
`;

export const TaskArea = styled.View`
  margin: auto;
  height: 150px;
  width: 60%;
`;

export const TaskList = styled.FlatList.attrs({
  showsVerticalScrollIndicator: false,
})``;
