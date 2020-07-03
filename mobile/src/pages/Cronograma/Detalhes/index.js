import React, { useState } from 'react';
import { Feather } from '@expo/vector-icons';
import { CheckBox, Button } from 'react-native';
import Container from '~/components/Container';
import TaskHeader from '~/components/TaskHeader';
import {
  Box,
  CheckArea,
  CheckText,
  CheckItem,
  Notes,
  NotesText,
  NotesButton,
} from './styles';

const Detalhes = () => {
  const [isSelected, setSelection] = useState(false);

  return (
    <Container>
      <TaskHeader />
      <Box>
        <CheckArea>
          <CheckItem>
            <CheckBox value={isSelected} onValueChange={setSelection} />
            <CheckText>TESTE</CheckText>
          </CheckItem>
        </CheckArea>
      </Box>
      <Notes>
        <Feather name="edit-3" size={24} color="#FFF" />
        <NotesText>Notes</NotesText>
        <NotesButton>
          <Feather name="chevron-up" size={24} color="#FFF" />
        </NotesButton>
      </Notes>
    </Container>
  );
};
Detalhes.navigationOptions = ({ navigation }) => ({
  headerRight: () => (
    <Button
      onPress={() => alert('This is a button!')}
      title="Info"
      color="#fff"
    />
  ),
});
export default Detalhes;
