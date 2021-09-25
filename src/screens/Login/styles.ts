import styled, { css } from 'styled-components/native';

export const Container = styled.View`
  ${({ theme: { colors, spacings } }) => css`
    flex: 1;
    background-color: ${colors.primary};
    align-items: center;
    justify-content: center;
    padding: ${spacings.large * 1.5}px;
  `}
`;
