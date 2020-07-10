import styled from 'styled-components/native';
import { Animated } from 'react-native';
import colors from '~/config/ColorConfig';

export const Area = styled.View`
  height: 100%;
  background-color: #6d5dcf;
`;

export const ButtonReturn = styled.TouchableOpacity`
  position: absolute;
  top: 35px;
  left: 0px;
  z-index: 3;
`;
export const AreaText = styled.Text`
  padding: 64px 32px 128px;
  color: white;
  font-size: 24px;
  margin-right: 64px;
`;

export const Box = styled.View`
  margin-top: 45%;
  position: absolute;
  background-color: #f7fafc;
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

export const PickerArea = styled(Animated.View)`
  flex-direction: row;
  width: 100%;
  justify-content: center;
`;

export const TouchDateTime = styled.TouchableWithoutFeedback``;

export const PickerSelect = styled(Animated.View)`
  margin: 5px;
  height: 32px;
  width: 100px;
  background-color: transparent;
  color: #8867dd;
  font-size: 12px;
  border-color: #6d5dcf;
  border-width: 1px;
  border-radius: 8px;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  padding: 4px 0px;
`;

export const TextTimePicker = styled.Text`
  font-size: 14px;
  color: #6d5dcf;
  margin-left: 5px;
`;

export const Submit = styled.TouchableOpacity`
  border-radius: 5px;
  height: 45px;
  width: 90%;
  align-self: center;
  background-color: ${colors.primary};
  position: absolute;
  bottom: 35px;
  justify-content: center;
`;

export const WhiteText = styled.Text`
  color: white;
  text-align: center;
`;

export const CategoriaSelectArea = styled(Animated.View)`
  margin-top: 10px;
  width: 100%;
  padding: 0 10px;
`;

export const CategoriaSelect = styled.FlatList`
  width: 100%;
`;

export const CategoriaButton = styled.TouchableOpacity`
  position: relative;
  flex-direction: row;
  align-items: center;
  width: 100%;
`;

export const CategoriaBolinha = styled.View`
  width: 12px;
  height: 12px;
  border-radius: 50px;
`;
