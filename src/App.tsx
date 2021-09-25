import React from 'react';
import { SafeAreaView, StatusBar, useColorScheme } from 'react-native';
import { ThemeProvider } from 'styled-components/native';
import { Default } from './assets/styles/themes';
import MessageProvider from './contexts/MessageContext';
import AuthProvider from './contexts/AuthContext';
import Routes from './routes';

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <ThemeProvider theme={Default}>
      <SafeAreaView style={{ flex: 1 }}>
        <MessageProvider>
          <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
          <AuthProvider>
            <Routes />
          </AuthProvider>
        </MessageProvider>
      </SafeAreaView>
    </ThemeProvider>
  );
};

export default App;
