import React, { useState, useEffect } from 'react';
import { Image } from 'react-native';
import { CategoryService } from '~/services/category';
import Container from '~/components/Container';
import ButtonBack from '~/components/ButtonBack';
import ColorModal from '~/components/ColorModal';

import {
  Area,
  HeaderTop,
  Title,
  InputArea,
  Input,
  OpenModal,
  AreaButtonCria,
  ButtonCriar,
  Bolinha,
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
    if (!categoria.type && categoria.type !== 'button') {
      setTitulo(categoria.titulo);
      setColor(categoria.color);
      setId(categoria.id);
      setTextButton('Atualizar');
    }
    // console.log('catUseEffect', categoria, titulo, color, id);
  }, []);

  async function handleCategoria() {
    if (titulo !== '' && color !== '') {
      if (id > 0) {
        await CategoryService.updateById({
          titulo,
          color,
          id,
        });
        // console.log('createResponse', response);
        navigation.goBack();
      } else {
        await CategoryService.addData({ titulo, color });
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
        <ColorModal
          setColor={setColor}
          modalVisible={modalVisible}
          setModalVisible={setModalVisible}
          handleCategoria={handleCategoria}
        />
      </Area>
    </Container>
  );
};

export default Criar;
