import React, { forwardRef } from 'react';
import {
  ActivityIndicator,
  TouchableOpacity,
  TouchableOpacityProps,
} from 'react-native';
import { useTheme } from 'styled-components';
import * as S from './styles';

export type CustomButtonProps = {
  text: string;
  loading?: boolean;
} & TouchableOpacityProps;

const CustomButton = forwardRef<TouchableOpacity, CustomButtonProps>(
  ({ text, loading, ...props }, ref) => {
    const { colors } = useTheme();

    return (
      <S.Container ref={ref} {...props}>
        {loading ? (
          <ActivityIndicator color={colors.primary} />
        ) : (
          <S.TextButton>{text}</S.TextButton>
        )}
      </S.Container>
    );
  },
);

export default CustomButton;
