import React, { useState } from 'react';
import { CheckBox } from 'react-native';

import { CheckText, Check } from './styles';

const CheckItem = ({ item }) => {
  const [isSelected, setSelection] = useState(false);
  return (
    <Check>
      <CheckBox value={isSelected} name="tarefa" onValueChange={setSelection} />
      <CheckText>{item.titulo}</CheckText>
    </Check>
  );
};

export default CheckItem;
