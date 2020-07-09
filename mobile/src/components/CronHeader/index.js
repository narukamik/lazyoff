import React from 'react';

import {
  Button,
  Container,
  SmallTitle,
  AreaTitle,
  Title,
  Icon,
} from './styles';

const CronHeader = ({ page, titulo, navigation, icon }) => {
  return (
    <Container>
      {page && <Title>{page}</Title>}
      <AreaTitle>
        {titulo && <SmallTitle>{titulo}</SmallTitle>}
        <Button
          onPress={() =>
            navigation.jumpTo('Cronograma', { screen: 'Pesquisa' })
          }
        >
          <Icon name={icon} size={20} color="#FFF" />
        </Button>
      </AreaTitle>
    </Container>
  );
};

export default CronHeader;
