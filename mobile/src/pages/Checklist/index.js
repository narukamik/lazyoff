import React from 'react';
import {Text} from 'react-native';
import Container from '~/components/Container';
import CronHeader from '~/components/CronHeader';
import {  Button } from './styles';

const Checklist = () => {
  return (
    <Container>
      <Button>
      <CronHeader icon="clock"/>
      </Button>
    </Container>
  );
};

export default Checklist;
