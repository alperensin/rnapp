import styled, { css } from 'styled-components/native';
import * as Animatable from 'react-native-animatable';

export const Container = styled.View`
  ${({ theme: { colors, device } }) => css`
    height: ${device.height / 4}px;
    background-color: ${colors.secondary};
  `}
`;

export const ImageItem = styled.Image`
  ${({ theme: { device } }) => css`
    height: ${device.height / 4}px;
  `}
`;

export const Overlay = styled.View`
  ${({ theme: { device } }) => css`
    position: absolute;
    height: ${device.height / 4}px;
    width: 100%;
    background-color: 'rgba(0, 0, 0, 0.5)';
  `}
`;

export const ProductText = styled.Text`
  ${({ theme: { fonts, colors, device } }) => css`
    position: absolute;
    align-self: center;
    font-size: ${fonts.large * 2}px;
    color: ${colors.white};
    top: ${device.height / 4 - fonts.xxlarge * 4}px;
    z-index: 1;
  `}
`;

export const BackButtonWrapper = styled(Animatable.View)`
  ${({ theme: { spacings } }) => css`
    top: ${spacings.xsmall}px;
    left: ${spacings.xsmall}px;
    position: absolute;
    z-index: 2;
  `}
`;

export const InfoWrapper = styled.View`
  ${({
    theme: {
      spacings: { medium },
    },
  }) => css`
    flex: 1;
    align-items: center;
    padding: 0 ${medium}px 0 ${medium}px;
  `}
`;

export const PriceWrapper = styled.View`
  ${({ theme: { device } }) => css`
    height: ${device.height / 5}px;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
    margin-left: -20px;
  `}
`;

export const TextTitle = styled.Text`
  ${({ theme: { fonts, colors, spacings } }) => css`
    color: ${colors.text};
    font-size: ${fonts.medium * 2}px;
    font-weight: 700;
    margin-bottom: ${spacings.xsmall}px;
  `}
`;

export const NormalText = styled.Text`
  ${({ theme: { fonts, colors } }) => css`
    color: ${colors['light-text']};
    font-size: ${fonts.medium}px;
  `}
`;

export const TextDescription = styled.Text`
  ${({ theme: { fonts, colors } }) => css`
    color: ${colors['light-text']};
    font-size: ${fonts.large}px;
  `}
`;

export const ShoppingCartButtonWrapper = styled(Animatable.View)`
  ${({ theme: { spacings, colors } }) => css`
    width: 80px;
    height: 80px;
    border-radius: 40px;
    background-color: ${colors.text};
    align-items: center;
    justify-content: center;
    bottom: ${spacings.xlarge}px;
    right: ${spacings.xlarge}px;
    position: absolute;
    z-index: 2;
  `}
`;
