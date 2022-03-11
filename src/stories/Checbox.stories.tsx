import React from 'react';

import { Checkbox } from '../components';
import { RadioButtonProps } from '../components/RadioButton';

export default {
  title: 'Forms/Checkbox',
  component: Checkbox,
};

export const Default = (args: RadioButtonProps) => <Checkbox {...args} />;
Default.args = {
  label: 'Label',
  value: 'Value',
};
