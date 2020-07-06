import React from 'react';
import { Feather } from '@expo/vector-icons';
import colors from '~/config/ColorConfig';

import { ButtonReturn } from './styles';

const ButtonBack = ({ navigation, color = colors.primary }) => {
  return (
    <ButtonReturn onPress={() => navigation.goBack()}>
      <Feather name="chevron-left" size={30} color={color} />
    </ButtonReturn>
  );
};

export default ButtonBack;
