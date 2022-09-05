import React from 'react';

import { KeyboardArrowLeft } from '@mui/icons-material';
import { ComponentStory } from '@storybook/react';

import { Button, ButtonProps } from '../components/Button';
import { Next } from '../images';

export default {
  title: 'Atoms/Button',
  component: Button,
  argTypes: {
    boxShadow: {
      options: [true, false],
      control: { type: 'boolean' },
    },
  },
};

const Default: ComponentStory<typeof Button> = (args: ButtonProps) => <Button {...args}>Button text</Button>;

export const Variant = Default.bind({});
Variant.args = { variant: 'square' };

export const Color = Default.bind({});
Color.args = { color: 'primary' };
Color.decorators = [
  () => {
    return (
      <div style={{ display: 'flex', gap: '1rem' }}>
        <Button {...(Color.args as ButtonProps)} color="primary">
          Button
        </Button>
        <Button {...(Color.args as ButtonProps)} color="secondary">
          Button
        </Button>
        <Button {...(Color.args as ButtonProps)} color="tertiary">
          Button
        </Button>
        <Button {...(Color.args as ButtonProps)} color="mint">
          Button
        </Button>
      </div>
    );
  },
];

export const Sizes = Default.bind({});
Sizes.args = { size: 'small' };

export const Material = (args: ButtonProps) => (
  <div style={{ marginRight: '10px', display: 'flex', alignItems: 'center' }}>
    <Button style={{ marginRight: '10px' }}>
      Imported svg
      <Next
        style={{
          display: 'inline-block',
          shapeRendering: 'inherit',
          transform: 'translate3d(0, 0, 0)',
          verticalAlign: 'middle',
          height: '0.75rem',
          marginLeft: '10px',
        }}
      />
    </Button>
    <Button {...args} style={{ marginRight: '10px' }}>
      <KeyboardArrowLeft />
      Material ui svg
    </Button>
    <Button>Button text</Button>
  </div>
);
Material.args = {
  svg: 'left',
  variant: 'square',
};

export const Disabled = () => (
  <>
    <Button color="primary" disabled>
      Primary
    </Button>
    <Button variant="rounded" disabled>
      Rounded
    </Button>
    <Button size="big" disabled>
      Big
    </Button>
    <Button boxShadow={true} disabled style={{ width: '200px' }}>
      Boxshadow
    </Button>
  </>
);
