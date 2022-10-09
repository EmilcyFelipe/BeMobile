import React from 'react';
import {Container, LogoWrapper, LogoImage} from './styles';
import {Text} from 'react-native';
import Logo from '../../assets/logo.png';
export default function Header() {
  return (
    <Container>
      <LogoImage source={Logo} />
    </Container>
  );
}
