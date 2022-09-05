import React from 'react';
import { ComponentStory } from '@storybook/react';

import { TextArea } from '../components/';

export default {
  title: 'Atoms/TextArea',
  component: TextArea,
};

export const Default: ComponentStory<typeof TextArea> = () => <TextArea id={'oejriek'} ariaLabel={'pepep'} />;

export const Styled = () => (
  <div style={{ width: '500px' }}>
    <TextArea id="sms" ariaLabel="SMS">
      SMS
    </TextArea>
  </div>
);
