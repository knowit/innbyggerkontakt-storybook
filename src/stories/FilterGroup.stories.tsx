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

Default.args = {
  options: ['Automatisk', 'Enkel', 'Planlagt', 'Kladd', 'Aktiv', 'Fullført'],
  toggled: ['Kladd'],
  exclusivity: [
    ['Automatisk', 'Enkel'],
    ['Planlagt', 'Kladd', 'Aktiv', 'Fullført'],
    ['Enkel', 'Aktiv'],
  ],
};
