import React, { ReactNode, useEffect, useRef } from 'react';
import { Animated, StyleSheet } from 'react-native';
import { useTheme } from 'styled-components';
import LinearGradient from 'react-native-linear-gradient';
import * as S from './styles';

type LazyLoadProfileProps = {
  children: ReactNode;
  loading: boolean;
  type: 'product' | 'category';
};

const Loader = ({ children, loading, type }: LazyLoadProfileProps) => {
  const {
    device: { width },
  } = useTheme();

  const translateX = useRef(new Animated.Value(-25)).current;

  useEffect(() => {
    Animated.loop(
      Animated.timing(translateX, {
        toValue: width - 40,
        duration: 1350,
        useNativeDriver: true,
      }),
      {
        iterations: -1,
      },
    ).start();
  }, [width, translateX]);

  const LoadBarEffect = () => {
    return (
      <S.LoadBar style={{ transform: [{ translateX }] }}>
        <LinearGradient
          style={StyleSheet.absoluteFillObject}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 0 }}
          colors={[
            'rgba(255, 255, 255, 0)',
            '#ffffff',
            'rgba(255, 255, 255, 0)',
          ]}
        />
      </S.LoadBar>
    );
  };

  if (!loading) {
    return <>{children}</>;
  }

  return (
    <S.Container type={type}>
      <LoadBarEffect />
      <S.TextName type={type}>
        <LoadBarEffect />
      </S.TextName>
      {type === 'product' && <S.TextPrice />}
    </S.Container>
  );
};

export default Loader;
