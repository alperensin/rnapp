import styled, { css } from 'styled-components/native';

export const Container = styled.View`
  ${({ theme: { colors, spacings, borders, device } }) => css`
    position: relative;
    background-color: ${colors.text};
    margin: ${spacings.medium / 2}px;
    border-radius: ${borders.radius * 2}px;
    width: ${device.width / 2 - spacings.medium * 1.5}px;
    height: ${device.width / 2 - spacings.medium * 1.5}px;
    margin-bottom: ${spacings.medium}px;
  `}
`;

export const TextName = styled.Text`
  ${({ theme }) => css`
    position: absolute;
    color: ${theme.colors.white};
    font-size: ${theme.fonts.medium}px;
    margin-bottom: ${theme.spacings.xsmall / 2}px;
    margin-top: ${theme.spacings.xsmall / 2}px;
    align-self: center;
    top: 0;
  `}
`;

export const TextPrice = styled.Text`
  ${({ theme: { colors, fonts, spacings } }) => css`
    position: absolute;
    bottom: ${spacings.small}px;
    right: ${spacings.small}px;
    color: ${colors.white};
    font-size: ${fonts.medium}px;
  `}
`;

export const ImageItem = styled.Image`
  ${({ theme: { borders } }) => css`
    border-radius: ${borders.radius * 2}px;
  `}
`;
