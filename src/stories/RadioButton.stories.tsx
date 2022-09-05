import React from 'react';

import { RadioButton } from '../components';
import { RadioButtonProps } from '../components/RadioButton';

export default {
  title: 'Atoms/Radio button',
  component: RadioButton,
};

export const Default = (args: RadioButtonProps) => <RadioButton {...args} />;
Default.args = {
  label: 'Label',
  value: 'Value',
};

export const Disabled = (args: RadioButtonProps) => <RadioButton {...args} />;
Disabled.args = {
  label: 'Label',
  value: 'Value',
  disabled: true,
};
