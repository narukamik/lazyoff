import React from 'react';
import Container from '~/components/Container';
import CronHeader from '~/components/CronHeader';
import CategoriaItem from '~/components/CategoriaItem';
import { Area, ScrollArea } from './styles';

import infos from '~/assets/infos';

const { categoria } = infos;

const Lista = ({ navigation }) => {
  return (
    <Container>
      <CronHeader page="Categorias" />
      <Area>
        <ScrollArea
          data={categoria}
          keyExtractor={(item) => String(item.titulo)}
          renderItem={({ item }) => (
            <CategoriaItem categoria={item} navigation={navigation} />
          )}
        />
      </Area>
    </Container>
  );
};

export default Lista;
