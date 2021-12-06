/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable prettier/prettier */
/* eslint-disable indent */
import React from 'react';

import FiltersComponent from './index';

export default {
    title: 'Design System/Header/Filters',
    component: FiltersComponent,
};

const Template = (args: any) => (
    <FiltersComponent {...args} />
);

export const Filters: any = Template.bind({});
