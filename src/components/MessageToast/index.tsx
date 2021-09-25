import React, { useContext, useEffect, useRef } from 'react';
import { Animated, Easing } from 'react-native';
import { MessageContext } from '../../contexts/MessageContext';
import * as S from './styles';

const MessageToast = () => {
  const { show, message, messageType } = useContext(MessageContext);

  const translateY = useRef(new Animated.Value(90)).current;

  useEffect(() => {
    Animated.timing(translateY, {
      toValue: show ? 0 : 90,
      duration: 1000,
      useNativeDriver: true,
      easing: Easing.bounce,
    }).start();
  }, [show, translateY]);

  return (
    <S.Container
      type={messageType}
      style={{
        transform: [{ translateY }],
      }}>
      <S.ToastText numberOfLines={3}>{message}</S.ToastText>
    </S.Container>
  );
};

export default MessageToast;
