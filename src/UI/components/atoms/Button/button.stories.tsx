/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable prettier/prettier */
/* eslint-disable indent */
import React from 'react';

import { Button } from './index';

import colors from '../../../../utils/colors';

export default {
    title: 'Design System/Button',
    component: Button,
};

const Template = (args: any) => <div style={{ marginTop: 60, width: 400 }}> <Button {...args} /></div>;

export const Primary: any = Template.bind({});
Primary.args = {
    variant: 'primary',
    children: 'Button',
    onClick: () => {
        alert('Botão Pressionado');
    },
};

export const PrimaryLoading: any = Template.bind({});
PrimaryLoading.args = {
    variant: 'primary',
    children: 'Button',
    loading: true,
};

export const Secondary: any = Template.bind({});
Secondary.args = {
    variant: 'secondary',
    children: 'Button secondary',
    onClick: () => {
        alert('Botão Pressionado');
    }
};

export const SecondaryLoading: any = Template.bind({});
SecondaryLoading.args = {
    variant: 'secondary',
    children: 'Button secondary',
    loading: true,
};
