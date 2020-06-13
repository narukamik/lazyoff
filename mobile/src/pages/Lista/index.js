import React, { useState } from 'react';
import { View, Text, TextInput, Picker } from 'react-native';
import { Feather } from '@expo/vector-icons';
import Container from '~/components/Container';

import styles from './styles';

const Lista = () => {
  const [categoria, setCategoria] = useState('categoria');
  const [dia, setDia] = useState('dia');
  const [hora, setHora] = useState('hora');

  return (
    <Container>
      <View style={styles.bgDiv}>
        <Text style={styles.bgTitle}>Dê um nome a sua nova lista</Text>
        <View style={styles.frontDiv}>
          <View style={styles.inputDiv}>
            <TextInput
              style={styles.inputTitle}
              placeholder="Digite o nome da sua lista..."
            />
            <Feather name="smile" size={24} color="#8867DD" />
          </View>
          <View style={styles.buttons}>
            <Picker
              selectedValue={dia}
              style={styles.buttonProp}
              onValueChange={(itemValue, itemIndex) => setDia(itemValue)}
            >
              <Picker.Item label="Dia" value="dia" />
              <Picker.Item label="01" value="01" />
              <Picker.Item label="02" value="02" />
            </Picker>

            <Picker
              selectedValue={categoria}
              style={styles.buttonProp}
              onValueChange={(itemValue, itemIndex) => setCategoria(itemValue)}
            >
              <Picker.Item label="Categoria" value="categoria" />
              <Picker.Item label="Casa" value="casa" />
              <Picker.Item label="Trabalho" value="trabalho" />
            </Picker>

            <Picker
              selectedValue={hora}
              style={styles.buttonProp}
              onValueChange={(itemValue, itemIndex) => setHora(itemValue)}
            >
              <Picker.Item label="Hora" value="hora" />
              <Picker.Item label="08:00" value="08:00" />
              <Picker.Item label="09:00" value="09:00" />
            </Picker>
          </View>
        </View>
      </View>
    </Container>
  );
};

export default Lista;
