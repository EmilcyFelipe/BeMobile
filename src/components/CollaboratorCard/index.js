import React, {useEffect, useState} from 'react';
import {
  Container,
  HeaderBanner,
  PictureWrapper,
  UserPicture,
  Name,
  Description,
  DescriptionItem,
  Label,
  Value,
} from './styles';

import Icons from 'react-native-vector-icons/AntDesign';

import UserImage from '../../assets/user_standart.png';

export default function CollaboratorCard() {
  const [opened, setOpened] = useState(false);
  const [data, setData] = useState({
    name: 'Giovana L. Arruda',
    role: 'Front-end',
    launchDate: 1665242725240,
    phoneNumber: '+55 (55) 55555-555',
  });
  const [date, setDate] = useState('--/--/----');

  useEffect(() => {
    function convertDateToFormat() {
      let day = new Date(data.launchDate).getDate();
      let month = new Date(data.launchDate).getMonth();
      let year = new Date(data.launchDate).getFullYear();
      setDate(
        `${day < 10 ? '0' + day : day}/${
          month < 9 ? '0' + (month + 1) : month + 1
        }/${year}`,
      );
    }
    convertDateToFormat();
  });
  return (
    <Container>
      <HeaderBanner
        onPress={() => {
          setOpened(!opened);
        }}>
        <PictureWrapper>
          <UserPicture source={UserImage} />
        </PictureWrapper>
        <Name>{data.name}</Name>
        <Icons name={opened ? 'up' : 'down'} size={20} color="#5984C0" />
      </HeaderBanner>
      {opened && (
        <Description>
          <DescriptionItem>
            <Label>Cargo</Label>
            <Value>{data.role}</Value>
          </DescriptionItem>
          <DescriptionItem>
            <Label>Data de admissão</Label>
            <Value>{date}</Value>
          </DescriptionItem>
          <DescriptionItem>
            <Label>Telefone</Label>
            <Value>{data.phoneNumber}</Value>
          </DescriptionItem>
        </Description>
      )}
    </Container>
  );
}
