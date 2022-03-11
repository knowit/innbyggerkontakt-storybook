import React from 'react';

import { ComponentStory } from '@storybook/react';

import { ErrorMessage } from '../components';
import { ErrorMessageProps } from '../components/ErrorMessage';

export default {
  title: 'Components/ErrorMessage',
  component: ErrorMessage,
};

const Base: ComponentStory<typeof ErrorMessage> = (args: ErrorMessageProps) => <ErrorMessage {...args} />;

export const Default = Base.bind({});
Default.args = {
  errorTitle: 'This is a message title',
  errorMessage: 'This is an error message that displays details about the error ',
  color: 'error',
};
