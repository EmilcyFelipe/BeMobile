import React from 'react';
import {Container, LabelWrapper} from './styles';
import {View, Text} from 'react-native';
import CollaboratorCard from '../../components/CollaboratorCard';
import Header from '../../components/Header';

export default function Home() {
  return (
    <Container>
      <Header />
      <LabelWrapper>
        <Text>Foto</Text>
      </LabelWrapper>
      <CollaboratorCard />
    </Container>
  );
}
