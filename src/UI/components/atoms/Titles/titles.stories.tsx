/* eslint-disable quotes */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable prettier/prettier */
/* eslint-disable indent */
import React from 'react';

import Title from './index';

import colors from '../../../../utils/colors';

export default {
    title: 'Design System/Titles',
    component: Title,
};

const Template = (args: any) => (
    <div
        style={{
            width: 400,
            padding: 10,
            marginLeft: 12,
            marginRight: 12,
        }}>
        <Title {...args} />
    </div>
);

export const TitleH1: any = Template.bind({});
TitleH1.args = {
    content: "Space Flight News",
    color: colors.purple,
    fontSize: "56",
    type: "h1",
    fontWeight: "bold",
};

export const TitleH2: any = Template.bind({});
TitleH2.args = {
    content: "Space Flight News",
    color: colors.purple,
    fontSize: "48",
    type: "h2",
    fontWeight: "bold",
};

export const TitleH3: any = Template.bind({});
TitleH3.args = {
    content: "Space Flight News",
    color: colors.purple,
    fontSize: "42",
    type: "h3",
    fontWeight: "bold",
};

export const TitleH4: any = Template.bind({});
TitleH4.args = {
    content: "Space Flight News",
    color: colors.purple,
    fontSize: "36",
    type: "h4",
    fontWeight: "bold",
};

export const TitleH5: any = Template.bind({});
TitleH5.args = {
    content: "Space Flight News",
    color: colors.purple,
    fontSize: "28",
    type: "h5",
    fontWeight: "bold",
};

export const TitleH6: any = Template.bind({});
TitleH6.args = {
    content: "Space Flight News",
    color: colors.purple,
    fontSize: "24",
    type: "h6",
    fontWeight: "bold",
};
