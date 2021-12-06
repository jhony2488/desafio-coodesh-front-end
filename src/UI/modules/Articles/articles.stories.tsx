/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable prettier/prettier */
/* eslint-disable indent */
import React from 'react';

import ArticlesComponent from './index';

export default {
    title: 'Design System/Articles/Articles',
    component: ArticlesComponent,
};

const Template = (args: any) => (
    <ArticlesComponent {...args} />
);

export const Articles: any = Template.bind({});
