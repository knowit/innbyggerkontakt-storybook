import React from 'react';

import { Person } from '@mui/icons-material';

import { Tag } from '../components/Tag/Tag';

export default {
  title: 'Atoms/Tag',
  component: Tag,
};

export const Default = (args) => <Tag {...args} />;
Default.args = {
  text: 'Automatisk',
};

export const WithLeftIcon = (args) => <Tag {...args} />;

WithLeftIcon.args = {
  leftIcon: <Person />,
  text: 'Er over 18 år',
};

export const WithMultipleIcons = (args) => <Tag {...args} />;

WithMultipleIcons.args = {
  leftIcon: <Person />,
  text: 'Automatisk',
  rightIcon: <Person />,
};

export const AsChildren = (args) => <Tag {...args} />;

AsChildren.args = {
  children: (
    <>
      <Person /> Er over 18 år
    </>
  ),
};
