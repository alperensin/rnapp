import React from 'react';
import { StyleSheet } from 'react-native';
import * as S from './styles';

export type CategoryProps = {
  id: string;
  name: string;
  img: string;
  description: string;
};

const CategoryItem = ({ name, img }: CategoryProps) => {
  return (
    <S.Container>
      <S.ImageItem
        style={[StyleSheet.absoluteFillObject]}
        source={{ uri: `${img}` }}
        resizeMode="cover"
      />
      <S.TextName>{name}</S.TextName>
    </S.Container>
  );
};

export default CategoryItem;
