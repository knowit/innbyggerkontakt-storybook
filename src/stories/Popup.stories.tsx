import React from 'react';

import { Input, Popup } from '../components/';
import { PopupProps } from '../components/Popup';

export default {
  title: 'Components/Popup',
  component: Popup,
};

const Default = (args: PopupProps) => <Popup {...args} />;

export const PopupWithText = Default.bind({});
PopupWithText.args = {
  infoText: 'Dette her er random eksempel infotekst. Den eneste hunden som ikke har rosa tunge er chow.',
  consent: false,
};

const PopupWithComponent = (args: PopupProps) => (
  <Popup {...args} childComponent={<Input id="emailInput" ariaLabel={'Arial label'} label={'Epost'} />} />
);

export const PopupWithInput = PopupWithComponent.bind({});
PopupWithInput.args = {
  ...PopupWithText.args,
};

const PopupWithMoreComponents = (args: PopupProps) => (
  <Popup
    {...args}
    childComponent={
      <div>
        <Input id="emailInput" ariaLabel={'Arial label'} label={'Epost'} />
        <Input id="emailInput" ariaLabel={'Arial label'} label={'Epost'} />
        <Input id="emailInput" ariaLabel={'Arial label'} label={'Epost'} />
      </div>
    }
  />
);

export const PopupWithMultiComponents = PopupWithMoreComponents.bind({});
PopupWithMultiComponents.args = {
  ...PopupWithText.args,
};
