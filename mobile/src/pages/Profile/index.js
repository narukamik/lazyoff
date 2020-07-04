import React from 'react';

import { Feather } from '@expo/vector-icons';

import {
  Container,
  Area,
  Status,
  Photo,
  Name,
  Email,
  Hours, 
  Section,
  Hour,
  Subtitle,
  Options,
  Select,
  BtnAction,
  IconEdit,
  IconCloud,
  EmailArea,
  Border,
  ButtonReturn
} from './styles';

const Profile = ({ navigation }) => {
  return (
    <Container>
      <Area>
        <ButtonReturn onPress={() => navigation.goBack()}>
          <Feather name="chevron-left" size={30} color="#6d5dcf" />
        </ButtonReturn>
        <Status>
          <Border>
            <Photo source={{ uri: 'https://cdn.syntese.com.br/wp-content/uploads/2019/01/thumb_AleB.jpg' }} />
          </Border>
          <Name>John Doe</Name>
          <EmailArea>
            <Email>johndoe@email.com</Email>
            <IconCloud>
              <Feather name="upload-cloud" size={18} color="#6d5dcf" />
            </IconCloud>
          </EmailArea>
        </Status>
      </Area>
      <Hours>
        <Section>
          <Hour>9:00</Hour>
          <Subtitle>Início</Subtitle>
        </Section>
        <Section>
          <Hour>1h</Hour>
          <Subtitle>Pausa</Subtitle>
        </Section>
        <Section>
          <Hour>18:00</Hour>
          <Subtitle>Fim</Subtitle>
        </Section>
        <IconEdit>
          <Feather name="edit" size={18} color="#6d5dcf" />
        </IconEdit>
      </Hours>
      <Options>
        <BtnAction>
          <Select>Carteira</Select>
        </BtnAction>
        <BtnAction>
          <Select>Resgates</Select>
        </BtnAction>
        <BtnAction>
          <Select>Ajuda</Select>
        </BtnAction>
        <BtnAction>
          <Select>Política de privacidade</Select>
        </BtnAction>
      </Options>
    </Container>
  );
};

export default Profile;
