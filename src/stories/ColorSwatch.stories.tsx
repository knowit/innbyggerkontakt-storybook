import React from 'react';

import { ColorSwatch } from '../components/';
import { ButtonProps } from '../components/ColorSwatch';

export default {
  title: 'Atoms/ColorSwatch',
  component: ColorSwatch,
  argTypes: {
    colorHex: {
      defaultValue: '#1dd19d',
      control: { type: 'color' },
    },
  },
};

export const Default = (args: ButtonProps) => <ColorSwatch {...args} />;

export const WhiteTextShow = ({ checked }) => (
  <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
    <ColorSwatch colorHex={'#B03A2E'} checked={checked} />
    <ColorSwatch colorHex={'#76448A'} checked={checked} />
    <ColorSwatch colorHex={'#1F618D'} checked={checked} />
    <ColorSwatch colorHex={'#1E8449'} checked={checked} />
    <ColorSwatch colorHex={'#B7950B'} checked={checked} />
  </div>
);

export const BlackTextShow = ({ checked }) => (
  <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
    <ColorSwatch colorHex={'#E6B0AA'} checked={checked} />
    <ColorSwatch colorHex={'#D7BDE2'} checked={checked} />
    <ColorSwatch colorHex={'#A9CCE3'} checked={checked} />
    <ColorSwatch colorHex={'#A9DFBF'} checked={checked} />
    <ColorSwatch colorHex={'#F9E79F'} checked={checked} />
  </div>
);
