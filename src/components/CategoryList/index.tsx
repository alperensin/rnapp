import React, { useCallback, useContext } from 'react';
import { FlatList, ListRenderItem, TouchableOpacity } from 'react-native';
import { AppContext } from '../../contexts/AppContext';
import * as Animatable from 'react-native-animatable';
import * as S from './styles';

import CategoryItem, { CategoryProps } from '../CategoryItem';
import FakeDataLoadingCategory from '../../utils/FakeDataLoadingCategory';
import Loader from '../Loader';

const CategoryList = () => {
  const { loadingCategory, categories, filterByCategory } =
    useContext(AppContext);

  const renderItem: ListRenderItem<CategoryProps> = useCallback(
    ({ item, index }) => {
      return (
        <Loader type="category" loading={loadingCategory}>
          <TouchableOpacity
            onPress={() => filterByCategory(item.id)}
            activeOpacity={0.7}>
            <Animatable.View animation="fadeInRight" delay={index * 150}>
              <CategoryItem {...item} />
            </Animatable.View>
          </TouchableOpacity>
        </Loader>
      );
    },
    [loadingCategory, filterByCategory],
  );

  return (
    <S.WrapperCategories>
      <S.Title>Categorias</S.Title>
      <FlatList<CategoryProps>
        horizontal={true}
        keyExtractor={({ id }) => id}
        data={loadingCategory ? FakeDataLoadingCategory : categories}
        renderItem={renderItem}
        showsHorizontalScrollIndicator={false}
        style={{
          marginHorizontal: -20,
        }}
        contentContainerStyle={{
          paddingLeft: 20,
        }}
      />
    </S.WrapperCategories>
  );
};

export default CategoryList;
