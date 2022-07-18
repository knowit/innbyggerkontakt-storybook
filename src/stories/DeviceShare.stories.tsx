import React from 'react';

import { DeviceShare } from '../components/DeviceShare/DeviceShare';

export default {
  title: 'Components/DeviceShare',
  component: DeviceShare,
  argTypes: {
    showValue: { control: 'boolean' },
    mobileShare: { control: { type: 'range', min: 0, max: 100, step: 1, default: 50 } },
  },
};

export const Default = (args) => <DeviceShare {...args} />;
Default.args = {
  mobileShare: 50,
  showValue: true,
};
