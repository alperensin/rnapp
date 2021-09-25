import styled, { css } from 'styled-components/native';

export const Container = styled.TouchableOpacity`
  ${({ theme: { colors, borders, spacings }, disabled }) => css`
    width: 100%;
    height: 50px;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    background-color: ${disabled ? colors.disable : colors.secondary};
    border-radius: ${borders.radius}px;
    margin-top: ${spacings.medium}px;
  `}
`;

export const TextButton = styled.Text`
  ${({ theme: { colors, fonts } }) => css`
    color: ${colors.primary};
    font-size: ${fonts.large}px;
  `}
`;
