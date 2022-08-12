import React from 'react';

import { Checkbox, RadioButtonProps } from '../components';

export default {
  title: 'Forms/Checkbox',
  component: Checkbox,
};

export const Default = (args: RadioButtonProps) => <Checkbox {...args} />;
Default.args = {
  label: 'Label',
  value: 'Value',
};
