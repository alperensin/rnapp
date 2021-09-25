import React from 'react';
import { TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import { StackScreenProps } from '@react-navigation/stack';
import { RootStackAppParamList } from '../../routes/app.routes';
import {
  SharedElement,
  SharedElementRoute,
} from 'react-navigation-shared-element';
import FeatherIcon from 'react-native-vector-icons/Feather';
import * as Animatable from 'react-native-animatable';
import * as S from './styles';

type ScreenProductDetailsProps = StackScreenProps<
  RootStackAppParamList,
  'Details'
>;

const ProductDetails = ({
  navigation,
  route: {
    params: { product },
  },
}: ScreenProductDetailsProps) => {
  return (
    <>
      <S.Container style={{ elevation: 5 }}>
        <S.BackButtonWrapper animation="fadeInLeft" delay={300} duration={1000}>
          <TouchableOpacity
            onPress={() => navigation.goBack()}
            activeOpacity={0.7}>
            <FeatherIcon name="arrow-left" size={32} color="#FFFFFF" />
          </TouchableOpacity>
        </S.BackButtonWrapper>
        <SharedElement
          style={[StyleSheet.absoluteFillObject]}
          id={`item.${product.id}.img`}>
          <S.ImageItem
            style={[StyleSheet.absoluteFillObject]}
            source={{ uri: `${product.img}${product.id}` }}
            resizeMode="cover"
          />
        </SharedElement>
        <S.ProductText style={{ position: 'absolute' }}>
          {product.name}
        </S.ProductText>
        <Animatable.View animation="fadeIn" delay={300} duration={1000}>
          <S.Overlay />
        </Animatable.View>
      </S.Container>
      <S.InfoWrapper>
        <ScrollView
          contentContainerStyle={{ paddingBottom: 110 }}
          showsVerticalScrollIndicator={false}>
          <S.PriceWrapper>
            <S.InfoWrapper>
              <S.TextTitle>Preço</S.TextTitle>
              <S.TextDescription>R$ {product.price}</S.TextDescription>
            </S.InfoWrapper>
            <S.InfoWrapper>
              <S.TextTitle>Unidade</S.TextTitle>
              <S.TextDescription>{product.unit}</S.TextDescription>
            </S.InfoWrapper>
          </S.PriceWrapper>
          <S.InfoWrapper>
            <S.TextTitle>Descrição</S.TextTitle>
            <S.NormalText>{product.description}</S.NormalText>
          </S.InfoWrapper>
        </ScrollView>
      </S.InfoWrapper>
      <S.ShoppingCartButtonWrapper animation="zoomIn" duration={600}>
        <TouchableOpacity onPress={() => {}} activeOpacity={0.7}>
          <FeatherIcon name="shopping-cart" size={55} color="#FFFFFF" />
        </TouchableOpacity>
      </S.ShoppingCartButtonWrapper>
    </>
  );
};

ProductDetails.sharedElements = ({ params }: SharedElementRoute) => {
  const {
    product: { id },
  } = params;

  return [
    {
      id: `item.${id}.img`,
    },
  ];
};

export default ProductDetails;
