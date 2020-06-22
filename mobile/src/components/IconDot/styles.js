import styled from 'styled-components/native';
import { Feather } from '@expo/vector-icons';

export const Container = styled.View`
  width: 24px;
  height: 24px;
  margin: 5px;
  align-items: center;
  justify-content: center;
`;
export const Dot = styled.View`
  background-color: ${(props) => props.color};
  border-radius: 6px;
  width: ${(props) => (props.isActive === true ? '8px' : '0px')};
  height: ${(props) => (props.isActive === true ? '8px' : '0px')};
  margin-top: ${(props) => (props.isActive === true ? '4px' : '0px')};
`;
export const Icon = styled(Feather)`
  text-shadow-offset: ${(props) =>
    props.isActive === true ? '10px 5px' : '0px 0px'};
`;
