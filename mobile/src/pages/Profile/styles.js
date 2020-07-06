import styled from 'styled-components/native';
import colors from '~/config/ColorConfig';

export const Container = styled.SafeAreaView`
  flex: 1;
  background-color: #f7fafc;
`;

export const Area = styled.View`
  width: 100%;
  background-color: #f7fafc;
`;

export const Status = styled.View`
  justify-content: center;
  align-items: center;
  margin: 8px 16px;
  padding-top: 32px;
`;

export const Border = styled.View`
  width: 86px;
  height: 86px;
  border-radius: 70px;
  border-width: 3px;
  border-color: #6d5dcf;
`;

export const Photo = styled.Image`
  width: 80px;
  height: 80px;
  border-radius: 70px;
  border-width: 2px;
  border-color: white;
  z-index: 2;
`;

export const Name = styled.Text`
  margin: 16px 16px 0;
  font-size: 24px;
`;

export const EmailTouch = styled.TouchableWithoutFeedback``;

export const EmailArea = styled.View`
  flex-direction: row;
  justify-content: center;
`;

export const Email = styled.Text``;

export const IconEdit = styled.View`
  position: absolute;
  right: 0;
`;

export const IconCloud = styled.View`
  margin-left: 8px;
`;

export const Subtitle = styled.Text`
  text-align: center;
  color: grey;
`;

export const Hour = styled.Text`
  font-size: 36px;
  text-align: center;
`;

export const Hours = styled.View`
  height: 120px;
  flex-direction: row;
  margin: 8px 16px;
`;

export const Section = styled.View`
  flex: 1;
  justify-content: center;
`;

export const Options = styled.View`
  margin: 8px 16px;
`;

export const Select = styled.Text`
  font-size: 18px;
  margin: 8px 0;
`;

export const BtnAction = styled.TouchableOpacity``;

export const ButtonReturn = styled.TouchableOpacity`
  position: absolute;
  top: 35px;
  left: 0px;
  z-index: 3;
`;
