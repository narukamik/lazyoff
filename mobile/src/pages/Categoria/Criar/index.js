import React, { useState, useEffect } from 'react';
import { Image } from 'react-native';
import { CategoryService } from '~/services/category';
import Container from '~/components/Container';
import ButtonBack from '~/components/ButtonBack';

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
  AreaButtonCria,
  ButtonCriar,
} from './styles';
import infos from '~/assets/infos';

const { dotColors } = infos;

const Criar = ({ navigation, route }) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [color, setColor] = useState('');
  const [titulo, setTitulo] = useState('');
  const [id, setId] = useState(0);
  const [textButton, setTextButton] = useState('Cadastrar');

  const { categoria } = route.params;

  useEffect(() => {
    console.log('catuseEffect', categoria);
    if (!categoria.type && categoria.type !== 'button') {
      setTitulo(categoria.titulo);
      setColor(categoria.color);
      setId(categoria.id);
      setTextButton('Atualizar');
    }
  }, []);

  async function handleCategoria() {
    if (titulo !== '' && titulo !== 'Nova Categoria' && color !== '') {
      if (id > 0) {
        console.log('updateCat', titulo, color);
        const response = await CategoryService.updateById({
          titulo,
          color,
          id,
        });
        console.log('createResponse', response);
        navigation.goBack();
      } else {
        const response = await CategoryService.addData({ titulo, color });
        console.log('createResponse', response);
        navigation.goBack();
      }
    }
  }

  return (
    <Container>
      <ButtonBack navigation={navigation} color="#FFF" />
      <HeaderTop>
        <Title>De um nome a sua</Title>
        <Title style={{ marginLeft: 30, marginTop: 1 }}>
          {`Categoria "${titulo}"`}
        </Title>
      </HeaderTop>

      <Area>
        <InputArea>
          <Input
            placeholder="Nova Categoria"
            value={titulo}
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
        {titulo !== '' && color !== '' && (
          <AreaButtonCria>
            <ButtonCriar onPress={() => handleCategoria()}>
              {textButton}
            </ButtonCriar>
          </AreaButtonCria>
        )}
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
