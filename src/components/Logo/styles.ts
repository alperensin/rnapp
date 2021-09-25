import styled, { css } from 'styled-components/native';

export const LogoImage = styled.Image`
  ${({ theme: { device, spacings } }) => css`
    margin-top: -${spacings.medium}px;
    margin-bottom: ${spacings.medium}px;
    width: ${device.width / 3}px;
    height: ${device.width / 3}px;
  `}
`;
