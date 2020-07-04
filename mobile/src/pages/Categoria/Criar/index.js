import React, { useState, Component } from 'react';
import {
  View,
  Button,
  CheckBox,
  Modal,
  Alert,
  Image,
  TouchableOpacity,
} from 'react-native';
import Container from '~/components/Container';

import {
  Area,
  CheckArea,
  CheckText,
  CheckItem,
  Text,
  Title,
  HeaderTop,
  Div,
  Bolinha,
  Separar,
  Checar,
  InputArea,
  Input,
  Emlinha,
  Coluna,
} from './styles';
// import { Categoria } from '~/components/Task/styles';

const Criar = ({ navigation }) => {
  const [modalVisible, setModalVisible] = useState(false);

  function navigateToCategoria() {
    navigation.goBack();
  }

  return (
    <Container>
      <HeaderTop>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Image
            style={{ marginLeft: 15, marginTop: 50 }}
            source={require('~/assets/categorias/arrow_left.png')}
          />
        </TouchableOpacity>

        <Title style={{ marginLeft: 35, marginTop: 20 }}>
          De um nome a sua{' '}
        </Title>
        <Title style={{ marginLeft: 35, marginTop: 1 }}>nova categoria</Title>
      </HeaderTop>

      <Area>
        {/* borderWidth: 1, borderColor: "#ff0", */}

        <InputArea style={{ width: '100%' }}>
          <Input
            style={{ marginLeft: -3, width: '90%' }}
            placeholder="Trabalho"
          />

          <TouchableOpacity
            style={{ marginLeft: -45 }}
            onPress={() => {
              setModalVisible(true);
            }}
          >
            <Image
              style={{ width: 25 }}
              source={require('~/assets/categorias/pintar.png')}
            />
          </TouchableOpacity>
        </InputArea>

        <Modal
          animationType="fade"
          transparent
          visible={modalVisible}
          onRequestClose={() => {
            alert('Modal has been closed.');
          }}
        >
          <View
            style={{
              backgroundColor: '#000000aa',
              flex: 1,
              flexDirection: 'row',
            }}
          >
            <View
              style={{
                borderWidth: 1,
                borderColor: '#EBEBEB',
                backgroundColor: '#FFFFFF',
                marginTop: '50%',
                marginBottom: '80%',
                marginRight: '10%',
                marginLeft: '10%',
                padding: 40,
                borderRadius: 20,
                flex: 1,
                flexDirection: 'row',
              }}
            >
              <TouchableOpacity
                style={{ marginLeft: -25, marginTop: -20, height: 25 }}
                onPress={() => {
                  setModalVisible(false);
                }}
              >
                <Image source={require('~/assets/categorias/pintarNO.png')} />
              </TouchableOpacity>

              {/* COLUNA 1 */}
              <Coluna>
                <Bolinha
                  style={{
                    borderWidth: 2,
                    borderColor: '#EBEBEB',
                    backgroundColor: '#62D16F',
                  }}
                />

                <Bolinha
                  style={{
                    borderWidth: 2,
                    borderColor: '#EBEBEB',
                    backgroundColor: '#6369C2',
                  }}
                />

                <Bolinha
                  style={{
                    borderWidth: 2,
                    borderColor: '#EBEBEB',
                    backgroundColor: '#D06161',
                  }}
                />
              </Coluna>

              {/* COLUNA 2 */}
              <Coluna>
                <Bolinha
                  style={{
                    borderWidth: 2,
                    borderColor: '#EBEBEB',
                    backgroundColor: '#62D194',
                  }}
                />

                <Bolinha
                  style={{
                    borderWidth: 2,
                    borderColor: '#EBEBEB',
                    backgroundColor: '#627CD1',
                  }}
                />

                <Bolinha
                  style={{
                    borderWidth: 2,
                    borderColor: '#EBEBEB',
                    backgroundColor: '#D17777',
                  }}
                />
              </Coluna>

              {/* COLUNA 3 */}
              <Coluna>
                <Bolinha
                  style={{
                    borderWidth: 2,
                    borderColor: '#EBEBEB',
                    backgroundColor: '#62D182',
                  }}
                />

                <Bolinha
                  style={{
                    borderWidth: 2,
                    borderColor: '#EBEBEB',
                    backgroundColor: '#8C9CD1',
                  }}
                />

                <Bolinha
                  style={{
                    borderWidth: 2,
                    borderColor: '#EBEBEB',
                    backgroundColor: '#D18C8C',
                  }}
                />
              </Coluna>

              {/* COLUNA 4 */}
              <Coluna>
                <Bolinha
                  style={{
                    borderWidth: 2,
                    borderColor: '#EBEBEB',
                    backgroundColor: '#62D1B9',
                  }}
                />

                <Bolinha
                  style={{
                    borderWidth: 2,
                    borderColor: '#EBEBEB',
                    backgroundColor: '#62A1D1',
                  }}
                />

                <Bolinha
                  style={{
                    borderWidth: 2,
                    borderColor: '#EBEBEB',
                    backgroundColor: '#D1A1A1',
                  }}
                />
              </Coluna>

              {/* COLUNA 5 */}
              <Coluna>
                <Bolinha
                  style={{
                    borderWidth: 2,
                    borderColor: '#EBEBEB',
                    backgroundColor: '#62D1CC',
                  }}
                />

                <Bolinha
                  style={{
                    borderWidth: 2,
                    borderColor: '#EBEBEB',
                    backgroundColor: '#02BBF2',
                  }}
                />

                <Bolinha
                  style={{
                    borderWidth: 2,
                    borderColor: '#EBEBEB',
                    backgroundColor: '#F2A333',
                  }}
                />
              </Coluna>

              {/* COLUNA 5 */}
              <Coluna>
                <Bolinha
                  style={{
                    borderWidth: 2,
                    borderColor: '#EBEBEB',
                    backgroundColor: '#61C3D0',
                  }}
                />

                <Bolinha
                  style={{
                    borderWidth: 2,
                    borderColor: '#EBEBEB',
                    backgroundColor: '#79D6F2',
                  }}
                />

                <Bolinha
                  style={{
                    borderWidth: 2,
                    borderColor: '#EBEBEB',
                    backgroundColor: '#F2AD4B',
                  }}
                />
              </Coluna>
            </View>
          </View>
        </Modal>
      </Area>
    </Container>
  );
};

export default Criar;
