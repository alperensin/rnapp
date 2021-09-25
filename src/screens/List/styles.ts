import { Animated } from 'react-native';
import styled, { css, DefaultTheme } from 'styled-components/native';

const wrapperModifiers = {
  white: ({ colors }: DefaultTheme) => css`
    color: ${colors.white};
  `,
  default: ({ colors }: DefaultTheme) => css`
    color: ${colors.primary};
  `,
};

export const Container = styled.View`
  ${({ theme: { spacings, colors } }) => css`
    flex: 1;
    padding: ${spacings.medium}px;
    background-color: ${colors.secondary};
  `}
`;

type TitleProps = {
  color: 'white' | 'default';
};

export const Title = styled.Text<TitleProps>`
  ${({ theme, color }) => css`
    font-size: ${theme.fonts.xxlarge}px;
    ${wrapperModifiers[color](theme)};
  `}
`;

export const WrapperProducts = styled(Animated.View)`
  ${({
    theme: {
      spacings: { medium },
      borders,
      colors,
    },
  }) => css`
    flex: 1;
    align-items: center;
    background-color: ${colors.primary};
    margin: 0 ${-medium}px ${-medium}px ${-medium}px;
    padding: ${medium}px ${medium}px 0 ${medium}px;
    border-top-left-radius: ${borders.radius * 7}px;
    border-top-right-radius: ${borders.radius * 7}px;
  `}
`;

export const TextEmptyState = styled.Text`
  ${({ theme: { colors, fonts } }) => css`
    color: ${colors.white};
    font-size: ${fonts.xsmall}px;
  `}
`;
