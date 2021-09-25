import styled, { css } from 'styled-components/native';

export const Container = styled.View.attrs({
  elevation: 5,
})`
  ${({ theme: { colors, borders, spacings } }) => css`
    width: 100%;
    height: 50px;
    flex-direction: row;
    align-items: center;
    background-color: ${colors.secondary};
    border-radius: ${borders.radius}px;
    margin-bottom: ${spacings.medium}px;
  `}
`;

export const WrapperIcon = styled.View`
  ${({ theme: { spacings } }) => css`
    padding: ${spacings.xsmall}px;
  `}
`;

export const Input = styled.TextInput`
  ${({ theme: { colors, spacings } }) => css`
    flex: 1;
    height: 50px;
    color: ${colors.text};
    padding: ${spacings.small}px;
  `}
`;
