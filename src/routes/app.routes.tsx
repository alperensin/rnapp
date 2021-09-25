import React, { useContext } from 'react';
import { TouchableOpacity } from 'react-native';
import { useTheme } from 'styled-components';
import { createSharedElementStackNavigator } from 'react-navigation-shared-element';
import { AuthContext } from '../contexts/AuthContext';
import AppProvider from '../contexts/AppContext';
import Icon from 'react-native-vector-icons/Feather';

import List from '../screens/List';
import ProductDetails from '../screens/ProductDetails';
import { ProductProps } from '../components/ProductItem';

export type RootStackAppParamList = {
  List: undefined;
  Details: { product: ProductProps };
};

const Stack = createSharedElementStackNavigator<RootStackAppParamList>();

const AppRoutes = () => {
  const { colors, spacings, fonts } = useTheme();

  const { handleLogout } = useContext(AuthContext);

  return (
    <AppProvider>
      <Stack.Navigator>
        <Stack.Screen
          component={List}
          name="List"
          options={{
            title: 'Quitanda do Zé',
            headerTitleStyle: {
              fontSize: fonts.xxlarge,
            },
            headerStyle: {
              height: 70,
              backgroundColor: colors.primary,
            },
            headerTintColor: colors.white,
            headerRight: ({ tintColor }) => (
              <TouchableOpacity activeOpacity={0.7} onPress={handleLogout}>
                <Icon color={tintColor} name="log-out" size={fonts.xxlarge} />
              </TouchableOpacity>
            ),
            headerRightContainerStyle: {
              padding: spacings.medium,
            },
          }}
        />
        <Stack.Screen
          component={ProductDetails}
          name="Details"
          options={{
            headerShown: false,
          }}
        />
      </Stack.Navigator>
    </AppProvider>
  );
};

export default AppRoutes;
