/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable prettier/prettier */
/* eslint-disable indent */
import React from 'react';

import HeaderComponent from './index';

export default {
    title: 'Design System/Header/Header',
    component: HeaderComponent,
};

const Template = (args: any) => (
    <HeaderComponent {...args} />
);

export const Header: any = Template.bind({});
