/* eslint-disable quotes */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable prettier/prettier */
/* eslint-disable indent */
import React from 'react';

import ParagraphsComponent from './index';

import colors from '../../../../utils/colors';

import { ParagraphsMock, DateMock, ItemNewsSiteMock } from '../../../../utils/Paragraphs';

export default {
    title: 'Design System/Paragraphs',
    component: ParagraphsComponent,
};

const Template = (args: any) => (
    <div
        style={{
            width: 400,
            padding: 10,
            marginLeft: 12,
            marginRight: 12,
        }}>
        <ParagraphsComponent {...args} />
    </div>
);

const TemplateNewSite = (args: any) => (
    <div
        style={{
            width: 200,
            padding: 10,
            marginLeft: 12,
            marginRight: 12,
        }}>
        <ParagraphsComponent {...args} />
    </div>
);

export const Paragraphs: any = Template.bind({});
Paragraphs.args = {
    content: ParagraphsMock,
    color: colors.black,
    fontSize: "24",
    fontWeight: "400",
    textAlign: "left"
};

export const Date: any = Template.bind({});
Date.args = {
    content: DateMock,
    color: colors.black,
    fontSize: "24",
    fontWeight: "400",
    textAlign: "left",
    type: 'Date'
};

export const ItemNewsSite: any = TemplateNewSite.bind({});
ItemNewsSite.args = {
    content: ItemNewsSiteMock,
    color: colors.white,
    fontSize: "12",
    fontWeight: "400",
    textAlign: "center",
    type: 'ItemNewsSite'
};
