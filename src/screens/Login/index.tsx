import React, { useContext, useState } from 'react';
import { ScrollView } from 'react-native';
import { useTheme } from 'styled-components';
import { AuthContext } from '../../contexts/AuthContext';
import Logo from '../../components/Logo';
import CustomInput from '../../components/CustomInput';
import CustomButton from '../../components/CustomButton';
import * as Animatable from 'react-native-animatable';
import * as S from './styles';

const Login = () => {
  const { colors } = useTheme();
  const { handleLogin, loadingLogin } = useContext(AuthContext);

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  return (
    <ScrollView
      contentContainerStyle={{ flexGrow: 1 }}
      showsVerticalScrollIndicator={false}>
      <S.Container>
        <Animatable.View animation="slideInDown" direction="normal">
          <Logo />
        </Animatable.View>
        <Animatable.View
          style={{ width: '100%' }}
          animation="slideInUp"
          direction="normal">
          <CustomInput
            placeholder="Email"
            keyboardType="email-address"
            autoCompleteType="email"
            textContentType="emailAddress"
            autoCapitalize="none"
            placeholderTextColor={colors.disable}
            onChangeText={setUsername}
          />
          <CustomInput
            autoCompleteType="password"
            textContentType="password"
            placeholder="Senha"
            secureTextEntry={true}
            placeholderTextColor={colors.disable}
            onChangeText={setPassword}
          />
          <CustomButton
            style={{ elevation: 5 }}
            text="Entrar"
            loading={loadingLogin}
            disabled={loadingLogin}
            activeOpacity={0.7}
            onPress={() => handleLogin(username, password)}
          />
        </Animatable.View>
      </S.Container>
    </ScrollView>
  );
};

export default Login;
