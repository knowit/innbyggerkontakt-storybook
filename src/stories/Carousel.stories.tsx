import React from 'react';

import { Carousel } from '../components';

export default {
  title: 'Carousel',
  component: Carousel,
};

export const Default = (args) => <Carousel {...args} />;

Default.args = {
  listItems: [
    'test1',
    'test2',
    'test3',
    'test4',
    'test5',
    'test6',
    'test7',
    'test8',
    'test9',
    'test10',
    'test11',
    'test12',
    'test13',
    'test14',
    'test15',
    'test16',
    'test17',
    'test18',
    'test19',
    'test20',
    'test21',
    'test22',
  ],
};
