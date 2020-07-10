import styled from 'styled-components/native';
import { Animated } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';

export const ActionArea = styled(Animated.View)`
  position: relative;
  flex: 1;
`;

export const ActionButtonArea = styled(Animated.View)`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 40px;
`;

export const ButtonNovo = styled(RectButton)`
  width: 100%;
  height: 40px;
  align-items: center;
  background-color: rgba(255, 255, 255, 0.59);
  justify-content: center;
`;

export const TextNovo = styled.Text`
  font-size: 16px;
  color: #333;
  text-align: center;
`;

export const Area = styled(Animated.View)`
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

export const AreaButtonCria = styled.View`
  position: absolute;
  right: 0;
  bottom: 0;
  left: 0;
`;
