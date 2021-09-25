import styled, { css } from 'styled-components/native';

export const Container = styled.View`
  ${({ theme: { device, spacings, colors, borders } }) => css`
    position: relative;
    background-color: ${colors.text};
    margin-right: ${spacings.medium}px;
    border-radius: ${borders.radius * 2}px;
    width: ${device.width / 3}px;
    height: ${device.width / 3}px;
  `}
`;

export const TextName = styled.Text`
  ${({ theme: { fonts, spacings, colors } }) => css`
    position: absolute;
    color: ${colors.white};
    font-size: ${fonts.medium}px;
    margin-bottom: ${spacings.xsmall / 2}px;
    margin-top: ${spacings.xsmall / 2}px;
    align-self: center;
    bottom: 0;
  `}
`;

export const ImageItem = styled.Image`
  ${({ theme: { borders } }) => css`
    border-radius: ${borders.radius * 2}px;
  `}
`;
