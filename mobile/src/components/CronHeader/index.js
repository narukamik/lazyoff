import React from 'react';

import { Button, Container, SmallTitle, AreaTitle, Title, Icon } from './styles';

const CronHeader = ({navigation, icon}) => {
  console.log("Resultado: ", navigation);
  return (
    <Container>
      <SmallTitle>Segunda,</SmallTitle>
      <AreaTitle>
        <Title>14 de junho</Title>
        <Button onPress={()=>navigation.jumpTo('Home', {screen:'Checklist'})} >
        <Icon name={icon} size={30} color="#FFF" />
        </Button>
      </AreaTitle>
    </Container>
  );
};

export default CronHeader;
