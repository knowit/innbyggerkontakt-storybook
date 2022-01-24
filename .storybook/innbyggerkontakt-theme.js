import { create } from '@storybook/theming';
import logo from './../src/images/logo.svg';

export default create({
  base: 'light',

  colorPrimary: '#0853B0',
  colorSecondary: '#16A078',

  // UI
  appBg: '#F2FFFC',
  appContentBg: '#F2FFFC',
  appBorderColor: '#86BCFF',
  appBorderRadius: 4,

  // Typography
  fontBase: '"Open Sans", sans-serif',
  fontCode: 'monospace',

  // Text colors
  textColor: 'black',
  textInverseColor: 'rgba(255,255,255,0.9)',

  // Toolbar default and active colors
  barTextColor: '#0853B0',
  barSelectedColor: '#052B58',
  barBg: '#86BCFF',

  // Form colors
  inputBg: 'white',
  inputBorder: '#86BCFF',
  inputTextColor: '#052B58',
  inputBorderRadius: 4,

  brandTitle: 'Innbyggerkontakt',
  brandUrl: 'https://innbyggerkontakt.no/',
  brandImage: logo,
});
