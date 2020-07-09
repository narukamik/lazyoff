import React, { useState, createRef } from 'react';
import { Feather } from '@expo/vector-icons';
import Container from '~/components/Container';
import Task from '~/components/Task';

import colors from '~/config/ColorConfig';
import infos from '~/assets/infos';

import {
  Header,
  InputText,
  ButtonIcon,
  Area,
  CronArea,
  Titles,
  CronScroll,
  CheckArea,
} from './styles';

const Pesquisa = ({ navigation }) => {
  const [search, setSearch] = useState('teste123');

  return (
    <Container>
      <Header>
        <InputText
          rightIcon={
            <ButtonIcon onPress={() => navigation.goBack()}>
              <Feather name="x" size={20} color="rgba(255,255,255,.79)" />
            </ButtonIcon>
          }
          inputContainerStyle={{
            backgroundColor: 'rgba(255, 255, 255, 0.19)',
            borderColor: '#FFF',
            borderRadius: 25,
            borderWidth: 1,
            borderBottomWidth: 1,
            height: 35,
            marginTop: 25,
          }}
          inputStyle={{
            marginLeft: 15,
            color: '#333',
          }}
          onChangeText={(text) => {
            setSearch(text);
            console.log('onChangeText', text);
          }}
        />
      </Header>
      <Area>
        {search !== '' && (
          <CronArea>
            <Titles>Cronograma</Titles>
            <CronScroll
              data={infos.tasks}
              keyExtractor={(item) => String(item.id)}
              renderItem={({ item }) => (
                <Task navigation={navigation} task={item} showTime={false} />
              )}
            />
          </CronArea>
        )}
      </Area>
    </Container>
  );
};

export default Pesquisa;
