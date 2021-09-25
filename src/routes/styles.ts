import styled, { css } from 'styled-components/native';

export const Container = styled.View`
  ${({ theme: { colors } }) => css`
    flex: 1;
    background-color: ${colors.primary};
  `}
`;
