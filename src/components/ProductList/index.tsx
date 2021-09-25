import React, { useCallback, useContext } from 'react';
import { FlatList, ListRenderItem, TouchableOpacity } from 'react-native';
import { NavigationProp, useNavigation } from '@react-navigation/core';
import { RootStackAppParamList } from '../../routes/app.routes';
import { AppContext } from '../../contexts/AppContext';
import { useTheme } from 'styled-components';
import * as S from './styles';

import ProductItem, { ProductProps } from '../ProductItem';
import FakeDataLoadingProduct from '../../utils/FakeDataLoadingProduct';
import Loader from '../Loader';

const ProductList = () => {
  const { loadingProducts, productsFiltered } = useContext(AppContext);

  const {
    device: { height },
  } = useTheme();

  const navigation = useNavigation<NavigationProp<RootStackAppParamList>>();

  const renderItem: ListRenderItem<ProductProps> = useCallback(
    ({ item }) => {
      return (
        <Loader type="product" loading={loadingProducts}>
          <TouchableOpacity
            onPress={() => navigation.navigate('Details', { product: item })}
            activeOpacity={0.7}>
            <ProductItem {...item} />
          </TouchableOpacity>
        </Loader>
      );
    },
    [loadingProducts, navigation],
  );

  const listEmptyComponent = () => {
    return <S.TextEmptyState>Nenhum produto encontrado.</S.TextEmptyState>;
  };

  return (
    <S.WrapperProducts>
      <S.Title>Produtos</S.Title>
      <FlatList<ProductProps>
        keyExtractor={({ id }) => id}
        data={loadingProducts ? FakeDataLoadingProduct : productsFiltered || []}
        numColumns={2}
        renderItem={renderItem}
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={listEmptyComponent}
        decelerationRate="fast"
        style={{
          minHeight: height / 2,
        }}
      />
    </S.WrapperProducts>
  );
};

export default ProductList;
