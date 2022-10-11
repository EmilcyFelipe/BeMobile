import React, {useEffect, useState, useMemo} from 'react';
import {
  Container,
  Main,
  Title,
  InputWrapper,
  Input,
  LabelWrapper,
  List,
  Separator,
} from './styles';

import {
  View,
  Text,
  TouchableOpacity,
  Keyboard,
  TouchableWithoutFeedback,
  FlatList,
  ScrollView,
} from 'react-native';

import CollaboratorCard from '../../components/CollaboratorCard';
import Header from '../../components/Header';

import Icon from 'react-native-vector-icons/Octicons';

export default function Home() {
  const [inputValue, setInputValue] = useState('');
  const [dataList, setDataList] = useState([
    {
      name: 'Alma',
      role: 'Secretária',
      launchDate: 1665242725240,
      phoneNumber: '5561999772473',
    },
    {
      name: 'Fernanda',
      role: 'Front-end',
      launchDate: 1665242725240,
      phoneNumber: '555555555555',
    },
    {
      name: 'Giovana L. Arruda',
      role: 'Back-end',
      launchDate: 1665242725240,
      phoneNumber: '555555555555',
    },
    {
      name: 'Marcia',
      role: 'TeamLeader',
      launchDate: 1665242725240,
      phoneNumber: '1111111111111',
    },
    {
      name: 'Maria',
      role: 'Front-end',
      launchDate: 1665242725240,
      phoneNumber: '3333333333333',
    },
    {
      name: 'Lucas',
      role: 'Scrum-master',
      launchDate: 1665242725240,
      phoneNumber: '555555555555',
    },
    {
      name: 'Felipe',
      role: 'Cientista',
      launchDate: 1665242725240,
      phoneNumber: '444444444444',
    },
  ]);
  const [listToRender, setListToRender] = useState(dataList);

  const lowerSearch = inputValue.toLowerCase();
  function matchSearch(item) {
    return (
      item.name.toLowerCase().startsWith(lowerSearch) ||
      item.role.toLowerCase().startsWith(lowerSearch) ||
      item.phoneNumber.toLowerCase().startsWith(lowerSearch)
    );
  }
  useEffect(() => {
    const filteredData = dataList.filter(matchSearch);
    console.log(filteredData);
    setListToRender(filteredData);
  }, [inputValue]);

  return (
    <TouchableWithoutFeedback
      style={{flex: 1}}
      onPress={() => Keyboard.dismiss()}>
      <Container>
        <Header />
        <Main>
          <Title>Funcionários</Title>
          <InputWrapper>
            <Input
              value={inputValue}
              onChangeText={text => setInputValue(text)}
              placeholder="Pesquisar"
            />
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
          <FlatList
            data={listToRender}
            ItemSeparatorComponent={Separator}
            renderItem={({item}) => <CollaboratorCard itemData={item} />}
            showsVerticalScrollIndicator={false}
          />
        </Main>
      </Container>
    </TouchableWithoutFeedback>
  );
}
