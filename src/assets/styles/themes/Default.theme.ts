import { Dimensions } from 'react-native';
const { width, height } = Dimensions.get('screen');

export default {
  device: {
    width,
    height,
  },
  colors: {
    primary: '#4ab2e3',
    secondary: '#F4F4F4',
    disable: '#D0D0D0',
    success: '#33CC33',
    danger: '#CC3333',
    info: '#3377CC',
    text: '#2F2D2E',
    'light-text': '#5F5F5F',
    white: '#FFFFFF',
    dark: '#2D2D2D',
    'light-bg': '#E9E9E9',
  },
  fonts: {
    xxsmal: 10,
    xsmall: 12,
    small: 14,
    medium: 16,
    large: 18,
    xlarge: 20,
    xxlarge: 24,
  },
  spacings: {
    xsmall: 12,
    small: 16,
    medium: 20,
    large: 24,
    xlarge: 28,
  },
  borders: {
    width: 1,
    radius: 10,
  },
};
