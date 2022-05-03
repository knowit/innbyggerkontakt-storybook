import React from 'react';

import { ColorPicker } from '../components/';
import { ColorPickerProps } from '../components/ColorPicker';

export default {
  title: 'Components/ColorPicker',
  component: ColorPicker,
};

export const Default = (args: ColorPickerProps) => <ColorPicker {...args} />;
