import styled from 'styled-components/native';

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

export const ModalBg = styled.Modal.attrs({
  animationType: 'fade',
  transparent: true,
})``;
export const ModalContainer = styled.View`
  background-color: #000000aa;
  flex: 1;
  align-items: center;
  justify-content: center;
`;

export const ModalTouch = styled.TouchableWithoutFeedback``;

export const ModalTouchAux = styled.View`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 0;
  flex: 1;
`;

export const ModalArea = styled.View`
  position: relative;
  background-color: #fff;
  border: 1px solid #ebebeb;
  height: 263px;
  width: 80%;
  padding: 40px;
  border-radius: 20px;
  z-index: 1;
`;

export const CloseModal = styled.TouchableOpacity`
  position: absolute;
  top: 10px;
  left: 10px;
`;

export const ScrollArea = styled.FlatList.attrs({
  showsVerticalScrollIndicator: false,
  numColumns: 6,
  contentContainerStyle: {
    justifyContent: 'space-between',
  },
})`
  position: relative;
  flex: 1;
`;
export const Coluna = styled.View``;

export const BolinhaTouch = styled.TouchableOpacity`
  margin: 0 auto 40px;
`;

export const Bolinha = styled.View`
  width: 30px;
  height: 30px;
  border-radius: 50px;
  border: 2px solid #ebebeb;
  background-color: ${(props) => (props.color ? props.color : '#F00')};
`;

export const Emlinha = styled.View`
  flex: 1;
  margin-top: 20px;
  flex-direction: row;
`;
