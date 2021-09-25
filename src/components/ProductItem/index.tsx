import React from 'react';
import { StyleSheet } from 'react-native';
import { SharedElement } from 'react-navigation-shared-element';
import * as S from './styles';

export type ProductProps = {
  id: string;
  category_id: string;
  price: string;
  unit: string;
  name: string;
  img: string;
  description: string;
};

const ProductItem = ({ id, name, price, img }: ProductProps) => {
  return (
    <S.Container>
      <SharedElement
        style={[StyleSheet.absoluteFillObject]}
        id={`item.${id}.img`}>
        <S.ImageItem
          style={[StyleSheet.absoluteFillObject]}
          source={{ uri: `${img}${id}` }}
          resizeMode="cover"
        />
      </SharedElement>
      <S.TextName>{name}</S.TextName>
      {price && <S.TextPrice>R$ {price}</S.TextPrice>}
    </S.Container>
  );
};

export default ProductItem;
