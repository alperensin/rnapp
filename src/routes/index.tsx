import React, { useContext, useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { AuthContext } from '../contexts/AuthContext';
import { isSignedIn } from '../services/auth';
import SplashScreen from 'react-native-splash-screen';
import MessageToast from '../components/MessageToast';
import * as S from './styles';

import AppRoutes from './app.routes';
import AuthRoutes from './auth.routes';

const Routes = () => {
  const { user, setUser } = useContext(AuthContext);

  const [loadUser, setLoadUser] = useState(true);

  useEffect(() => {
    const checkUser = async () => {
      const username = await isSignedIn();

      if (username) {
        setUser(username);
      }

      setLoadUser(false);
      SplashScreen.hide();
    };

    checkUser();
  }, [setUser]);

  if (loadUser) {
    return null;
  }

  return (
    <S.Container>
      <NavigationContainer>
        {user ? <AppRoutes /> : <AuthRoutes />}
      </NavigationContainer>
      <MessageToast />
    </S.Container>
  );
};

export default Routes;
