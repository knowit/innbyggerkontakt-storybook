import React from 'react';

import { Pagination } from '../components/';

export default {
  title: 'Molecules/Pagination',
  component: Pagination,
};

export const Default = () => <Pagination activePage={1} totalPage={23} />;
