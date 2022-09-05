import React from 'react';

import { ConsentModal } from '../components/';
import { ConsentProps } from '../components/ConsentModal';

export default {
  title: 'Molecules/ConsentModal',
  component: ConsentModal,
};

const Default = (args: ConsentProps) => (
  <ConsentModal
    infoText={
      <>
        Når du besøker denne siden, vil vi gjerne samle inn data dersom du gir oss tillatelse til det. Dersom vi får
        tillatelse vil vi samle inn statistikk for å forbedre våre tjenester, huske dine valg for senere besøk på denne
        siden samt benytte informasjonen vi henter inn til markedsføring.
      </>
    }
    {...args}
  />
);

export const ConsentText = Default.bind({});
ConsentText.args = {
  headerText: 'Cookies',
};
