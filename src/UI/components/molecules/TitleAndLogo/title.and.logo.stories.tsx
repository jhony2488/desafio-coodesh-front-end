/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable prettier/prettier */
/* eslint-disable indent */
import React from 'react';

import TitleAndLogoComponent from './index';

export default {
    title: 'Design System/Header/Title and Logo',
    component: TitleAndLogoComponent,
};

const Template = (args: any) => (
    <TitleAndLogoComponent {...args} />
);

export const TitleAndLogo: any = Template.bind({});
