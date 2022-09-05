import React from 'react';

import { Dropdown, SelectProps } from '../components/Dropdown/Dropdown';

export default {
  title: 'Atoms/Dropdown',
  component: Dropdown,
};

export const Default = (args: SelectProps) => <Dropdown placeholder="placeholder" {...args} />;

export const SingleValue = () => (
  <Dropdown
    placeholder="placeholder"
    options={[
      { label: 'loading', value: 'loading' },
      { label: 'loading2', value: 'loading2' },
      { label: 'loading3', value: 'loading3' },
    ]}
    ariaLabel={'label'}
    ariaError={'error'}
  />
);

export const MultipleValues = () => (
  <Dropdown
    placeholder="placeholder"
    options={[
      { label: 'loading', value: 'loading' },
      { label: 'loading2', value: 'loading2' },
      { label: 'loading3', value: 'loading3' },
    ]}
    isMulti
    ariaLabel={'ariaLabel'}
    ariaError={'ariaError'}
  />
);
