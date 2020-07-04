import styled from 'styled-components/native';
import { LinearGradient } from 'expo-linear-gradient';
import { Animated } from 'react-native';
import colors from '~/config/ColorConfig';

export const Box = styled(Animated.View)`
  position: relative;
  width: 100%;
  padding-left: 40px;
  padding-right: 20px;
  align-items: flex-start;
  justify-content: flex-start;
  z-index: 3;
  /* border: 1px solid #f00; */
`;

export const Container = styled(Animated.View)`
  position: relative;
  width: 100%;
  height: 100%;
`;

export const CheckArea = styled.View`
  position: absolute;
  top: 0px;
  left: 15px;
  width: 20px;
  height: 20px;
  margin-bottom: 30px;
  background-color: #fff;
  align-items: center;
  justify-content: center;
`;

export const Time = styled.Text`
  font-size: 14px;
  color: #000;
  width: 100%;
  margin-bottom: 8px;
`;

export const TaskTouch = styled.TouchableOpacity`
  width: 100%;
`;

export const TaskArea = styled(LinearGradient).attrs({
  start: [0, 1],
  end: [1, 0],
})`
  align-items: center;
  padding: 14px 16px 13px;
  flex-direction: row;
  border-radius: 7px;
  background-color: #ccc;
  width: 100%;
`;

export const Square = styled.View`
  width: 21px;
  height: 21px;
  border: 1px solid #fff;
  border-radius: 2px;
  background-color: rgba(255, 255, 255, 0.39);
`;

export const TextInfos = styled.View`
  padding: 0 10px;
`;

export const Title = styled.Text`
  font-size: 14px;
  line-height: 14px;
  width: 100%;
  color: #fff;
  font-weight: bold;
`;

export const Categoria = styled.Text`
  font-size: 12px;
  line-height: 12px;
  color: #fff;
  width: 100%;
`;

export const AreaCompletButton = styled(Animated.View)`
  position: absolute;
  top: 0;
  right: 0;
  width: 46px;
  height: 52px;
  z-index: -1;
`;

export const CompletButton = styled.TouchableOpacity`
  width: 100%;
  width: 46px;
  height: 52px;
  background-color: #32b3a4;
  border-top-right-radius: 7px;
  border-bottom-right-radius: 7px;
  align-items: center;
  justify-content: center;
`;

export const AreaPlusButton = styled(Animated.View)`
  position: absolute;
  top: 0;
  right: 46px;
  height: 52px;
  z-index: -1;
`;

export const PlusButton = styled.TouchableOpacity`
  align-items: center;
  justify-content: center;
  width: 52px;
  height: 52px;
  background-color: #f0f2f5;
`;

export const ButtonText = styled.Text`
  font-size: 12px;
  line-height: 12px;
  margin-top: 4px;
  color: #67656f;
`;

export const DarkBg = styled(Animated.View)`
  position: absolute;
  top: 62px;
  right: 0;
  background-color: #0e0b1a;
  z-index: 2;
  width: 179px;
  height: 76px;
  border-radius: 4px;
  z-index: 6;
`;

export const ButtonEdit = styled.TouchableOpacity`
  flex-direction: row;
  justify-content: space-between;
  padding: 8px 15px;
  border-bottom-color: rgba(255, 255, 255, 0.29);
  border-bottom-width: 1px;
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
