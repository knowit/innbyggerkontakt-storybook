import { FilterToggle } from '../components/FilterToggle/FilterToggle';

export default {
  title: 'Components/FilterToggle',
  component: FilterToggle,
  argTypes: {
    toggled: {
      control: 'boolean',
    },
    disabled: {
      control: 'boolean',
    },
  },
};

export const Default = (args) => {
  return <FilterToggle {...args} onClick={() => undefined} />;
};

Default.args = { label: 'Automatisk' };

export const Toggled = (args) => {
  return <FilterToggle {...args} onClick={() => undefined} />;
};

Toggled.args = { label: 'Automatisk', toggled: 'true' };

export const Disabled = (args) => {
  return <FilterToggle {...args} onClick={() => undefined} />;
};

Disabled.args = { label: 'Automatisk', disabled: 'true' };
