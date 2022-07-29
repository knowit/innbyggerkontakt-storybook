import React from 'react';

import { Pagination } from '../components/';

export default {
  title: 'Components/Pagination',
  component: Pagination,
  argTypes: {
    disabledLeft: { control: 'boolean' },
    disabledRight: { control: 'boolean' },
  },
};

export const Default = (args) => <Pagination {...args} />;
Default.args = { activePage: 1, totalPage: 23 };
