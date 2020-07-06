import styled from 'styled-components/native';
import { Animated } from 'react-native';
import colors from '~/config/ColorConfig';

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

export const ButtonArea = styled(Animated.View)`
  position: relative;
  margin-bottom: 15px;
  width: 100%;
`;
export const Button = styled.TouchableOpacity`
  position: relative;
  flex-direction: row;
  align-items: center;
  width: 100%;
`;

export const Bolinha = styled.View`
  width: 20px;
  height: 20px;
  border-radius: 50px;
`;

export const CheckText = styled.Text`
  width: 80%;
  font-size: 16px;
  color: ${(props) => (props.color ? props.color : colors.primary)};
  margin-left: 8px;
`;

export const DarkBg = styled(Animated.View)`
  position: absolute;
  top: 32px;
  left: 30px;
  background-color: #0e0b1a;
  z-index: 2;
  width: 179px;
  height: 76px;
  opacity: 0.93;
  border-radius: 4px;
  z-index: 6;
`;

export const ButtonEdit = styled.TouchableOpacity`
  flex-direction: row;
  justify-content: space-between;
  padding: 8px 15px;
  border-bottom-color: #0e0b1a;
`;

export const EditText = styled.Text`
  font-size: 16px;
  line-height: 16px;
  margin-top: 4px;
  color: #fff;
`;
export const ButtonDelete = styled.TouchableOpacity`
  flex-direction: row;
  justify-content: space-between;
  padding: 8px 15px;
`;
