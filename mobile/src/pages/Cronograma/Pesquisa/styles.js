import styled from 'styled-components/native';
import { Input } from 'react-native-elements';

export const Header = styled.View`
  flex: 1;
  padding: 0 20px;
  align-items: center;
  justify-content: center;
`;

export const InputText = styled(Input)``;

export const ButtonIcon = styled.TouchableOpacity``;

export const Area = styled.View`
  flex: 6;
  background-color: #fff;
`;

export const CronArea = styled.View`
  flex: 1;
  background-color: #fff;
`;

export const Titles = styled.Text`
  font-size: 16px;
  color: #aaa;
`;

export const CronScroll = styled.FlatList.attrs({
  showsVerticalScrollIndicator: false,
})`
  position: relative;
  flex: 1;
  width: 100%;
`;

export const CheckArea = styled.View``;
