import React from 'react';
import {
  Container,
  Main,
  Title,
  InputWrapper,
  Input,
  LabelWrapper,
} from './styles';
import {View, Text} from 'react-native';
import CollaboratorCard from '../../components/CollaboratorCard';
import Header from '../../components/Header';

import Icon from 'react-native-vector-icons/Octicons';

export default function Home() {
  return (
    <Container>
      <Header />
      <Main>
        <Title>Funcionários</Title>
        <InputWrapper>
          <Input placeholder="Pesquisar" />
          <Icon name="search" color="#f0f0f0" size={20} />
        </InputWrapper>
        <LabelWrapper>
          <Text
            style={{
              textTransform: 'uppercase',
              color: '#fff',
              fontWeight: 'bold',
            }}>
            Foto
          </Text>
          <Text
            style={{
              textTransform: 'uppercase',
              color: '#fff',
              fontWeight: 'bold',
            }}>
            Nome
          </Text>
          <Icon name="dot-fill" color="#fff" size={20} />
        </LabelWrapper>
        <CollaboratorCard />
      </Main>
    </Container>
  );
}
