import React from 'react';
import { Checkbox, ConsentModal } from '../components/';
import { ConsentProps } from '../components/ConsentModal';

export default {
    title: 'Components/ConsentModal',
    component: ConsentModal,
}

const Default = (args: ConsentProps) => <ConsentModal 
        consentComponent={
        <>Du kan velge å forhindre at dette nettstedet samler og analyserer handlingene du gjør her. 
        Dette vil beskytte personvernet ditt, men vil også forhindre at eieren lærer av hendlingene dine og skaper en bedre opplevelse for deg og andre brukere. 
        <Checkbox value={'value'} label={'Label'} /></>} 
    {...args} />

export const PopupWithText = Default.bind({});
PopupWithText.args = { 
    headerText: 'Dette er en headerText',
    infoText: 'KF bruker statistikkverktøy for anonymisert brukerinnsikt med formål om å evaluere effektiviteten og produktiviteten i løsningen. Analyse av statistikken vil gjøre det mulig for KF å forbedre funksjonalitet, bruker- vennlighet og innhold. Dersom du ikke ønsker å delta i innsamling av anonyme data, fjerner du haken i boksen under.', 
}
