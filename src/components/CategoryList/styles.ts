import styled, { css } from 'styled-components/native';

export const WrapperCategories = styled.View`
  ${({
    theme: {
      spacings: { medium },
    },
  }) => css`
    padding-bottom: ${medium}px;
  `}
`;

export const Title = styled.Text`
  ${({ theme: { fonts, colors, spacings } }) => css`
    font-size: ${fonts.xxlarge}px;
    color: ${colors.primary};
    margin-bottom: ${spacings.medium}px;
  `}
`;
