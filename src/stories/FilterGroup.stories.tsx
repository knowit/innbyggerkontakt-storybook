import { useState } from 'react';

import { FilterGroup } from '../components/FilterGroup/FilterGroup';

export default {
  title: 'Components/FilterGroup',
  component: FilterGroup,
};

export const Default = (args) => {
  const [toggled, setToggled] = useState([]);
  return <FilterGroup {...args} toggled={toggled} setToggled={setToggled} />;
};

const exclusivity: Map<string, string[]> = new Map();
exclusivity.set('Automatisk', ['Enkel']);
exclusivity.set('Enkel', ['Automatisk', 'Aktiv']);
exclusivity.set('Aktiv', ['Enkel']);
exclusivity.set('Planlagt', ['Kladd', 'Aktiv', 'Fullført']);
exclusivity.set('Kladd', ['Planlagt', 'Aktiv', 'Fullført']);
exclusivity.set('Aktiv', ['Kladd', 'Planlagt', 'Fullført', 'Enkel']);
exclusivity.set('Fullført', ['Kladd', 'Aktiv', 'Planlagt']);
Default.args = {
  options: ['Automatisk', 'Enkel', 'Planlagt', 'Kladd', 'Aktiv', 'Fullført'],
  toggled: ['Kladd'],
  exclusivity,
};
