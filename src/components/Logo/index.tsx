import React from 'react';
import * as S from './styles';

const Logo = () => {
  return (
    <S.LogoImage
      source={require('../../assets/images/logo.png')}
      resizeMode="contain"
    />
  );
};

export default Logo;
