import styled, { css } from 'styled-components/native';

export const Title = styled.Text`
  ${({ theme: { colors, fonts } }) => css`
    font-size: ${fonts.xxlarge}px;
    color: ${colors.white};
  `}
`;

export const WrapperProducts = styled.View`
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
