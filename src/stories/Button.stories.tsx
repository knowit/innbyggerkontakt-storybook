import React from 'react';
import { KeyboardArrowLeft, KeyboardArrowRight } from '@mui/icons-material';
import { Button, ButtonProps } from '../components/Button';

export default {
  title: 'Navigation/Button',
  component: Button,
};

export const Default = (args: ButtonProps) => <Button {...args}>Button text</Button>;
Default.args = { children: 'Label' };

export const Svg = (args: ButtonProps) => (
  <div style={{ marginRight: '10px', display: 'flex', alignItems: 'center' }}>
    <Button size={args.size} svg={args.svg} variant={args.variant} style={{ marginRight: '10px' }}>
      Button text
      <KeyboardArrowRight />
    </Button>
    <Button>Button text</Button>
  </div>
);

export const All = () => (
  <>
    <div style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
      <Button color="primary">Primary</Button>
      <Button color="secondary">Secondary</Button>
      <Button color="tertiary">Tertiary</Button>
      <Button color="mint">Mint</Button>
    </div>
    <div style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
      <Button variant="rounded">Primary Rounded</Button>
      <Button variant="rounded" color="secondary">
        Secondary Rounded
      </Button>
      <Button variant="rounded" color="tertiary">
        Tertiary Rounded
      </Button>
    </div>
    <div style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
      <Button boxShadow={true}>Primary Boxshadow</Button>
      <Button boxShadow={true} color="secondary">
        Secondary Boxshadow
      </Button>
      <Button boxShadow={true} color="mint">
        Mint Boxshadow
      </Button>
    </div>
    <div style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
      <Button size="svg" svg="left" style={{ marginRight: '10px' }}>
        <KeyboardArrowLeft />
        Icon left
      </Button>
      <Button size="svg" svg="right">
        Icon right
        <KeyboardArrowRight />
      </Button>
    </div>
  </>
);

export const Sizes = () => (
  <>
    <Button>Default</Button>
    <Button size="big">Big size</Button>
  </>
);

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
    <Button boxShadow={true} disabled style={{width: "200px"}}>
      Boxshadow
    </Button>
  </>
);
