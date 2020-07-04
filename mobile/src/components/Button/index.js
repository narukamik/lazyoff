import React from 'react';
import { ActivityIndicator } from 'react-native';

import { Container, Text } from './styles';

export default function Button({
  children,
  loading,
  textcolor = '#FFF',
  ...rest
}) {
  return (
    <Container {...rest}>
      {loading ? (
        <ActivityIndicator size="small" color="#FFF" />
      ) : (
        <Text style={{ color: textcolor }}>{children}</Text>
      )}
    </Container>
  );
}
