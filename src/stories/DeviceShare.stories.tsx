import React from 'react';

import DeviceShare from '../components/DeviceShare/DeviceShare';

export default {
  title: 'Components/DeviceShare',
  component: DeviceShare,
};

export const Default = (args) => <DeviceShare {...args} />;
Default.args = {
  mobileShare: 50,
  showValue: true,
};
