import React from 'react';
import { Image } from 'react-native';

import {
  ModalBg,
  ModalTouch,
  ModalTouchAux,
  ModalContainer,
  ModalArea,
  CloseModal,
  ScrollArea,
  BolinhaTouch,
  Bolinha,
} from './styles';
import infos from '~/assets/infos';

const { dotColors } = infos;

const ColorModal = ({
  modalVisible,
  setModalVisible,
  setColor,
  handleCategoria,
}) => {
  return (
    <ModalBg visible={modalVisible}>
      <ModalContainer>
        <ModalTouch onPress={() => setModalVisible(false)}>
          <ModalTouchAux />
        </ModalTouch>
        <ModalArea>
          <CloseModal onPress={() => setModalVisible(false)}>
            <Image source={require('~/assets/categorias/pintarNO.png')} />
          </CloseModal>

          <ScrollArea
            data={dotColors}
            keyExtractor={(item) => String(item.color)}
            renderItem={({ item }) => (
              <BolinhaTouch
                onPress={() => {
                  setColor(item.color);
                  setModalVisible(false);
                  handleCategoria();
                }}
              >
                <Bolinha key={item.color} color={item.color} />
              </BolinhaTouch>
            )}
          />
        </ModalArea>
      </ModalContainer>
    </ModalBg>
  );
};

export default ColorModal;
