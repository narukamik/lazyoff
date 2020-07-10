import React, { useState, useEffect } from 'react';
import { Image } from 'react-native';
import { CategoryService } from '~/services/category';
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
  ButtonCria,
  CriaText,
} from './styles';
import infos from '~/assets/infos';

const { dotColors } = infos;

const Criar = ({ navigation, route }) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [color, setColor] = useState('');
  const [titulo, setTitulo] = useState('');

  const { categoria } = route.params;

  useEffect(() => {
    setTitulo(categoria.titulo);
    if (categoria.type && categoria.type !== 'button') {
      setColor(categoria.color);
    }
  }, []);

  function handleCategoria() {
    if (titulo !== '' && titulo !== 'Nova Categoria' && color !== '') {
      if (categoria.id && categoria.id > 0) {
      } else {
        CategoryService.addData({ titulo, color });
      }
    }
  }

  return (
    <Container>
      <ButtonBack navigation={navigation} color="#FFF" />
      <CronHeader page="Dê um nome à sua" titulo="nova categoria" />
      {/* <HeaderTop>
        <Title style={{ marginLeft: 35, marginTop: 20 }}>
          De um nome a sua
        </Title>
        <Title style={{ marginLeft: 35, marginTop: 1 }}>nova categoria</Title>
      </HeaderTop> */}

      <Area>
        <InputArea>
          <Input
            placeholder="Nova Categoria"
            value={titulo !== 'Nova Categoria' && titulo}
            returnKeyType="send"
            onChangeText={setTitulo}
          />
          <OpenModal
            onPress={() => {
              setModalVisible(true);
            }}
          >
            {color === '' ? (
              <Image
                style={{ width: 25 }}
                source={require('~/assets/categorias/pintar.png')}
              />
            ) : (
              <Bolinha color={color} />
            )}
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
      </Area>
    </Container>
  );
};

export default Criar;
