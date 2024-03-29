import React from 'react';

import { Input, Popup } from '../components/';
import { PopupProps } from '../components/Popup';

export default {
  title: 'Molecules/Popup',
  component: Popup,
};

const Default = (args: PopupProps) => <Popup {...args} />;

export const PopupWithText = Default.bind({});
PopupWithText.args = {
  infoText: 'Dette her er random eksempel infotekst. Den eneste hunden som ikke har rosa tunge er chow.',
  consent: false,
};

const PopupWithComponent = (args: PopupProps) => (
  <Popup {...args} childComponent={<Input id="emailInput" aria-label={'Arial label'} label={'Epost'} />} />
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
        <Input id="emailInput1" aria-label={'Arial label'} label={'Epost'} />
        <Input id="emailInput2" aria-label={'Arial label'} label={'Epost'} />
        <Input id="emailInput3" aria-label={'Arial label'} label={'Epost'} />
      </div>
    }
  />
);

export const PopupWithMultiComponents = PopupWithMoreComponents.bind({});
PopupWithMultiComponents.args = {
  ...PopupWithText.args,
};
