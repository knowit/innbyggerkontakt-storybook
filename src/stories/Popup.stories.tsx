import React from 'react';
import { Popup } from '../components/';

export default {
    title: 'Components/Popup',
    component: Popup,
}

const Default = (args) => <Popup {...args} />

export const ChangePopup = Default.bind({});
ChangePopup.args = { type: 'info', children: 'Når du skal endre op denne e-posten vil den bli til en kladd igjen. Dette gjør at du må slette tidspunktet for utsending på nytt.'}