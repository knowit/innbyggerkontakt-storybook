import React from 'react';

import { RadioButton, RadioButtonProps } from '../components';

export default {
  title: 'Forms/Radio button',
  component: RadioButton,
};

export const Default = (args: RadioButtonProps) => <RadioButton {...args} />;
Default.args = {
  label: 'Label',
  value: 'Value',
};
