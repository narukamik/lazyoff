import styled from 'styled-components/native';
import Button from '~/components/Button';

export const Area = styled.View`
  position: relative;
  flex: 1;
  align-items: center;
  background-color: #f7fafc;
  padding: 20px 15px;
`;

export const HeaderTop = styled.View`
  top: 0px;
  width: 100%;
  height: 174px;
`;

export const Title = styled.Text`
  font-size: 22px;
  letter-spacing: 0px;
  color: #fff;
  opacity: 1;
  margin-left: 30px;
  margin-top: 20%;
`;

export const InputArea = styled.View`
  margin-top: 30px;
  flex-direction: row;
  align-items: center;
  margin: 0 32px;
  width: 100%;
`;

export const Input = styled.TextInput`
  flex: 1;
  padding-right: 10px;
  font-size: 24px;
`;

export const OpenModal = styled.TouchableOpacity``;

export const AreaButtonCria = styled.View`
  position: absolute;
  right: 0;
  bottom: 10%;
  left: 0;
  align-items: center;
`;

export const ButtonCriar = styled(Button)``;

export const Bolinha = styled.View`
  width: 30px;
  height: 30px;
  border-radius: 50px;
  border: 2px solid #ebebeb;
  background-color: ${(props) => (props.color ? props.color : '#F00')};
`;
