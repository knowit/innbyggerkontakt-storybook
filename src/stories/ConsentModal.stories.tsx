import React from 'react';

import { ConsentModal, ConsentProps } from '../components/';

export default {
  title: 'Components/ConsentModal',
  component: ConsentModal,
};

const Default = ({
  infoText = (
    <>
      Når du besøker denne siden, vil vi gjerne samle inn data dersom du gir oss tillatelse til det. Dersom vi får
      tillatelse vil vi samle inn statistikk for å forbedre våre tjenester, huske dine valg for senere besøk på denne
      siden samt benytte informasjonen vi henter inn til markedsføring.{' '}
    </>
  ),
  ...rest
}: ConsentProps) => <ConsentModal infoText={infoText} {...rest} />;

export const ConsentText = Default.bind({});
ConsentText.args = {
  headerText: 'Cookies',
};
