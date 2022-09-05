import React from 'react';
import { ComponentStory } from '@storybook/react';

import { SMSText } from '../components/';

export default {
  title: 'Molecules/SMSText',
  component: SMSText,
};

export const Default: ComponentStory<typeof SMSText> = () => (
  <SMSText id={'sms'} ariaLabel={'sms tekst'}>
    SMS tekst
  </SMSText>
);
