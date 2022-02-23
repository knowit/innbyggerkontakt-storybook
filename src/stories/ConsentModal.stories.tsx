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

export const ConsentText = Default.bind({});
ConsentText.args = { 
    headerText: 'Cookies',
    infoText: 'Når du besøker denne siden, vil vi gjerne samle inn data dersom du gir oss tillatelse til det.', 
}
