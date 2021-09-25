import React, { useCallback, useContext, useRef } from 'react';
import { TextInput, FlatList } from 'react-native';
import { AppContext } from '../../contexts/AppContext';
import { useTheme } from 'styled-components';
import CustomInput from '../../components/CustomInput';
import Icon from 'react-native-vector-icons/Feather';
import * as S from './styles';

import ProductList from '../../components/ProductList';
import CategoryList from '../../components/CategoryList';

type ItemList = {
  key: string;
  render: () => JSX.Element;
};

const List = () => {
  const searchInput = useRef<TextInput>(null);

  const { getProducts, onRefresh, refreshingProducts } = useContext(AppContext);

  const { colors, spacings } = useTheme();

  const SearchButton = useCallback(() => {
    return (
      <CustomInput
        ref={searchInput}
        placeholderTextColor={colors.disable}
        placeholder="Buscar produtos..."
        onChangeText={text => (!text || text.length > 2) && getProducts(text)}
        icon={<Icon name="search" size={24} color={colors.disable} />}
      />
    );
  }, [colors.disable, getProducts]);

  const data = [
    {
      key: 'CATEGORIES_LIST',
      render: () => <CategoryList />,
    },
    {
      key: 'SEARCH_INPUT',
      render: () => <SearchButton />,
    },
    {
      key: 'PRODUCTS_LIST',
      render: () => <ProductList />,
    },
  ];

  return (
    <S.Container>
      <FlatList<ItemList>
        data={data}
        renderItem={({ item }) => item.render()}
        keyExtractor={({ key }) => key}
        onRefresh={() => {
          searchInput.current?.clear();
          onRefresh();
        }}
        refreshing={refreshingProducts}
        style={{
          margin: -spacings.medium,
        }}
        contentContainerStyle={{
          padding: spacings.medium,
        }}
      />
    </S.Container>
  );
};

export default List;
