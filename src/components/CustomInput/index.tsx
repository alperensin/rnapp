import React, { forwardRef, ReactNode } from 'react';
import { TextInput, TextInputProps } from 'react-native';
import * as S from './styles';

type CustomInputProps = {
  icon?: ReactNode;
} & TextInputProps;

const CustomInput = forwardRef<TextInput, CustomInputProps>(
  ({ icon, ...props }, ref) => {
    return (
      <S.Container>
        {icon && <S.WrapperIcon>{icon}</S.WrapperIcon>}
        <S.Input ref={ref} {...props} />
      </S.Container>
    );
  },
);

export default CustomInput;
