import React from 'react';

import { ColorSwatch } from '../components/';
import { ColorSwatchProps } from '../components/ColorSwatch';

export default {
  title: 'Components/ColorSwatch',
  component: ColorSwatch,
  argTypes: {
    colorHex: {
      defaultValue: '#1dd19d',
      control: { type: 'color' },
    },
    checked: {
      control: false,
    },
  },
};

export const Default = (args: ColorSwatchProps) => <ColorSwatch {...args} />;

export const WhiteTextShow = () => (
  <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
    <ColorSwatch colorHex={'#B03A2E'} checked={false} />
    <ColorSwatch colorHex={'#76448A'} checked={false} />
    <ColorSwatch colorHex={'#1F618D'} checked={false} />
    <ColorSwatch colorHex={'#1E8449'} checked={false} />
    <ColorSwatch colorHex={'#B7950B'} checked={false} />
  </div>
);

export const BlackTextShow = () => (
  <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
    <ColorSwatch colorHex={'#E6B0AA'} checked={false} />
    <ColorSwatch colorHex={'#D7BDE2'} checked={false} />
    <ColorSwatch colorHex={'#A9CCE3'} checked={false} />
    <ColorSwatch colorHex={'#A9DFBF'} checked={false} />
    <ColorSwatch colorHex={'#F9E79F'} checked={false} />
  </div>
);
