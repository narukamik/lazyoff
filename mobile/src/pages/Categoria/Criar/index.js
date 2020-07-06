import React, { useState } from 'react';
import { View, Modal, Image, TouchableOpacity, Alert } from 'react-native';
import Container from '~/components/Container';
import ButtonBack from '~/components/ButtonBack';
import CronHeader from '~/components/CronHeader';

import {
  Area,
  HeaderTop,
  Title,
  InputArea,
  Input,
  OpenModal,
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

const Criar = ({ navigation }) => {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <Container>
      <ButtonBack navigation={navigation} color="#FFF" />
      <CronHeader page="De um nome a sua" titulo="nova categoria" />
      {/* <HeaderTop>
        <Title style={{ marginLeft: 35, marginTop: 20 }}>
          De um nome a sua
        </Title>
        <Title style={{ marginLeft: 35, marginTop: 1 }}>nova categoria</Title>
      </HeaderTop> */}

      <Area>
        <InputArea>
          <Input placeholder="Trabalho" />

          <OpenModal
            onPress={() => {
              setModalVisible(true);
            }}
          >
            <Image
              style={{ width: 25 }}
              source={require('~/assets/categorias/pintar.png')}
            />
          </OpenModal>
        </InputArea>

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
                  <BolinhaTouch>
                    <Bolinha key={item.color} color={item.color} />
                  </BolinhaTouch>
                )}
              />
            </ModalArea>
          </ModalContainer>
        </ModalBg>
      </Area>
    </Container>
  );
};

export default Criar;
