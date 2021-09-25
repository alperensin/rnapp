import styled, { css, DefaultTheme } from 'styled-components/native';
import { Animated } from 'react-native';
import { MessageProps } from '../../contexts/MessageContext';

const wrapperModifiers = {
  success: (theme: DefaultTheme) => css`
    background-color: ${theme.colors.success};
  `,
  danger: (theme: DefaultTheme) => css`
    background-color: ${theme.colors.danger};
  `,
  info: (theme: DefaultTheme) => css`
    background-color: ${theme.colors.info};
  `,
};

type MessageToastProps = Pick<MessageProps, 'type'>;

export const Container = styled(Animated.View)<MessageToastProps>`
  ${({ type, theme }) => css`
    ${wrapperModifiers[type](theme)}
    display: flex;
    align-items: center;
    justify-content: center;
    width: 95%;
    height: 80px;
    border-radius: ${theme.borders.radius}px;
    position: absolute;
    bottom: 10px;
    left: 2.5%;
    padding: ${theme.spacings.small}px;
  `}
`;

export const ToastText = styled.Text`
  ${({ theme: { colors, fonts } }) => css`
    color: ${colors.white};
    font-weight: 700;
    font-size: ${fonts.small}px;
  `}
`;
