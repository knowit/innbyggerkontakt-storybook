import React from 'react';

import { ColorPicker, ColorPickerProps } from '../components/';

export default {
  title: 'Components/ColorPicker',
  component: ColorPicker,
};

export const Default = (args: ColorPickerProps) => <ColorPicker {...args} />;
