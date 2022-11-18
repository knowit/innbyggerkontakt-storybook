import React from 'react';

import { ChevronLeft } from '@mui/icons-material';
import { ComponentStory } from '@storybook/react';

import { ButtonProps, MapButton } from '../components/MapButton';

export default {
  title: 'Atoms/MapButton',
  component: MapButton,
};

const Default: ComponentStory<typeof MapButton> = (args: ButtonProps) => (
  <MapButton {...args}>
    <ChevronLeft />
    Button text
  </MapButton>
);

export const Color = Default.bind({});
Color.args = { color: 'mint' };
