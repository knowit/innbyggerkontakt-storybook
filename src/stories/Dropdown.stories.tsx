import React from 'react';
import { Dropdown, SelectProps } from '../components/Dropdown/Dropdown';

export default {
  title: 'Forms/Dropdown',
  component: Dropdown,
};

export const Primary = (args: SelectProps) => <Dropdown placeholder="placeholder" {...args} />;

export const SingleValue = () => (
  <Dropdown
    placeholder="placeholder"
    options={[
      { label: 'loading', value: 'loading' },
      { label: 'loading2', value: 'loading2' },
      { label: 'loading3', value: 'loading3' },
    ]}
    value={'value'}
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
    value={'value'}
    ariaLabel={'ariaLabel'}
    ariaError={'ariaError'}
  />
);
