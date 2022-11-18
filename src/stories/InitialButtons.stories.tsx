import React from 'react';

import { ChevronLeft } from '@mui/icons-material';
import { ComponentStory } from '@storybook/react';

import { ButtonProps, InitialButtons } from '../components/MapButtons/InitialButtons';

export default {
  title: 'Molecules/InitialButtons',
  component: InitialButtons,
};

const Default: ComponentStory<typeof InitialButtons> = (args: ButtonProps) => (
  <InitialButtons {...args}>
    <ChevronLeft />
    Button text
  </InitialButtons>
);

export const Variant = Default.bind({});
Variant.args = { color: 'mint' };
