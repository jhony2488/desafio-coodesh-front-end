/* eslint-disable quotes */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable prettier/prettier */
/* eslint-disable indent */
import React from 'react';

import Select from './index';

export default {
    title: 'Design System/Select',
    component: Select,
};

const Template = (args: any) => (
    <div
        style={{
            width: 400,
            padding: 10,
            marginLeft: 12,
            marginRight: 12,
        }}>
        <Select {...args} />
    </div>
);

export const SelectSort: any = Template.bind({});
SelectSort.args = {
    name: "select",
    onChange: (value: string) => console.log(value),
    defaultValue: "",
    placeholder: "Sort",
    className: "select",
    disabled: false,
    isTwo: true,
};
