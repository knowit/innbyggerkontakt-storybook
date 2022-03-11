import React from 'react';

import { Edit, Message, Person } from '@mui/icons-material';

import { Input, InputProps } from '../components/Input';

const message = <Message />;
const person = <Person />;
const edit = <Edit />;

const icons = { edit, person, message, undefined };

export default {
  title: 'Forms/Input',
  component: Input,
  argTypes: {
    icon: {
      defaultValue: edit,
      options: Object.keys(icons), // An array of serializable values
      mapping: icons, // Maps serializable option values to complex arg values
      control: {
        type: 'select', // Type 'select' is automatically inferred when 'options' is defined
        labels: {
          // 'labels' maps option values to string labels
          edit: 'Edit',
          person: 'Person',
          message: 'Message',
          undefined: 'undefined',
        },
      },
    },
    labelIcon: {
      defaultValue: person,
      options: Object.keys(icons), // An array of serializable values
      mapping: icons, // Maps serializable option values to complex arg values
      control: {
        type: 'select', // Type 'select' is automatically inferred when 'options' is defined
        labels: {
          // 'labels' maps option values to string labels
          edit: 'Edit',
          person: 'Person',
          message: 'Message',
          undefined: 'undefined',
        },
      },
    },
  },
};

export const Default = () => (
  <Input type={'text'} id={'ID'} hideLabel={false} label={'Label'} ariaLabel={'Aria label'} />
);

export const Lab = (args: InputProps) => <Input {...args} />;
Lab.args = {};

export const Appearence = ({ icon }: InputProps) => (
  <>
    <Input
      id="greenInputWithoutIcon"
      placeholder="Appearence is green"
      label={'Label'}
      startFocused={false}
      ariaLabel={'Aria label'}
    />
    <Input
      id="greenInputWitIcon"
      placeholder="Appearence is green with icon"
      icon={icon}
      label={'Label'}
      ariaLabel={'Aria label'}
    />
    <Input
      id="blueInputWithoutIcon"
      appearence="blue"
      placeholder="Appearence is blue"
      label={'Label'}
      ariaLabel={'Aria label'}
    />
    <Input
      id="blueInputWithIcon"
      appearence="blue"
      placeholder="Appearence is blue with icon"
      icon={icon}
      label={'Label'}
      ariaLabel={'Aria label'}
    />
  </>
);

export const Label = ({ labelIcon }: InputProps) => (
  <>
    <Input label="label" type={'text'} id={'ID'} error={false} hideLabel={false} ariaLabel={'Aria label'} />
    <Input id="exampleId" label="Label with icon" labelIcon={labelIcon} error={false} ariaLabel={'Aria label'} />
  </>
);

export const HelperText = () => (
  <>
    <Input
      id="HelperText"
      label="Helpertext"
      helperText="This is helper message  without error"
      ariaLabel={'Aria label'}
    />
    <Input
      id="HelperTextForError"
      label="Helpertext"
      error
      helperText="This is helper message with error"
      ariaLabel={'Aria label'}
    />
  </>
);

export const Icons = ({ labelIcon, icon }: InputProps) => (
  <>
    <Input
      label="Icon in label"
      labelIcon={labelIcon}
      type={'text'}
      id={'ID'}
      hideLabel={false}
      ariaLabel={'Aria label'}
    />
    <Input label="Icon in input" icon={icon} type={'text'} id={'ID'} hideLabel={false} ariaLabel={'Aria label'} />
    <Input id="exampleId" label="Icon in label and input" labelIcon={labelIcon} icon={icon} ariaLabel={'Aria label'} />
  </>
);

export const Password = () => (
  <>
    <span>
      When input type is password icon prop is overwritten by default password icon that also provides functionality for
      showing and hiding password text
    </span>
    <Input
      id="exampleId"
      label="label"
      type="password"
      placeholder="skriv inn passord"
      ariaLabel={'Aria label'}
    ></Input>
  </>
);
