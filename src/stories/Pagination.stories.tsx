import React from 'react';

import { Pagination } from '../components/';

export default {
  title: 'Components/Pagination',
  component: Pagination,
};

export const Default = () => <Pagination activePage={1} totalPage={23} />;
