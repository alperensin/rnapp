import styled, { css, DefaultTheme } from 'styled-components/native';
import { Animated } from 'react-native';

type ItemProps = {
  type: 'category' | 'product';
};

const wrapperModifiersContainer = {
  category: ({ device: { width } }: DefaultTheme) => css`
    width: ${width / 3}px;
    height: ${width / 3}px;
  `,
  product: ({ device: { width }, spacings: { medium } }: DefaultTheme) => css`
    width: ${width / 2 - medium * 1.5}px;
    height: ${width / 2 - medium * 1.5}px;
    margin-bottom: ${medium}px;
  `,
};

const wrapperModifiersText = {
  category: () => css`
    bottom: 0;
  `,
  product: () => css`
    top: 0;
  `,
};

export const Container = styled.View<ItemProps>`
  ${({ theme, type }) => css`
    position: relative;
    background-color: ${theme.colors['light-bg']};
    margin: 0 ${theme.spacings.medium / 2}px 0 ${theme.spacings.medium / 2}px;
    border-radius: ${theme.borders.radius * 2}px;
    overflow: hidden;

    ${wrapperModifiersContainer[type](theme)}
  `}
`;

export const TextName = styled.View<ItemProps>`
  ${({ theme, type }) => css`
    position: absolute;
    background-color: ${theme.colors['light-bg']};
    margin-bottom: ${theme.spacings.xsmall / 2}px;
    margin-top: ${theme.spacings.xsmall / 2}px;
    align-self: center;
    ${wrapperModifiersText[type]}
    width: 50%;
    height: 15px;
    overflow: hidden;
  `}
`;

export const TextPrice = styled.View`
  ${({ theme: { spacings, colors } }) => css`
    position: absolute;
    background-color: ${colors['light-bg']};
    bottom: ${spacings.small}px;
    right: ${spacings.small}px;
    width: 30%;
    height: 20px;
  `}
`;

export const LoadBar = styled(Animated.View)`
  ${() => css`
    height: 100%;
    width: 50%;
    position: absolute;
    opacity: 0.5;
  `}
`;
