import React, { createContext, useContext, useState } from 'react';
import { api, PATH } from '../services/api';
import { onSignIn, onSignOut } from '../services/auth';
import { MessageContext } from './MessageContext';

type AuthState = {
  user: string | null;
  setUser: (username: string) => void;
  handleLogin: (username: string, password: string) => void;
  loadingLogin: boolean;
  handleLogout: () => void;
};

export const AuthContext = createContext<AuthState>({} as AuthState);

const AuthProvider: React.FC = ({ children }) => {
  const { showMessage } = useContext(MessageContext);

  const [user, setUser] = useState<string | null>(null);
  const [loadingLogin, setLoadingLogin] = useState(false);

  const handleLogout = async () => {
    setUser(null);
    await onSignOut();
  };

  const handleLogin = async (username: string, password: string) => {
    if (!username || !password) {
      showMessage({
        text: 'É necessário informar todos os dados.',
        type: 'danger',
      });

      return;
    }

    setLoadingLogin(true);

    await api
      .post(PATH.login.url, { username, password })
      .then(async () => {
        // Tratamento para exibir toast, api não estava retornando mensagem de erro
        if (username !== 'teste' || password !== '123456') {
          showMessage({
            text: 'Dados informados estão incorretos.',
            type: 'danger',
          });

          return;
        }

        setUser(username);
        await onSignIn(username);
      })
      .catch(err => {
        showMessage({
          text: err.message,
          type: 'danger',
        });
      })
      .finally(() => setLoadingLogin(false));
  };

  return (
    <AuthContext.Provider
      value={{ user, setUser, handleLogin, loadingLogin, handleLogout }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
