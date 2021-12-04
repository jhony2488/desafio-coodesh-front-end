/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable prettier/prettier */
/* eslint-disable indent */
import React from 'react';

import Input from './index';
import colors from '../../../../utils/colors';
import { mockInputSearch } from '../../../../utils/input';

export default {
    title: 'Design System/Input',
    component: Input,
};

const Template = (args: any) => (
    <div
        style={{
            display: 'grid',
            justifyItems: 'center',
            justifyContent: 'start',
            width: 400,
            backgroundColor: colors.purple,
            padding: 10,
            marginLeft: 12,
            marginRight: 12,
        }}>
        <Input {...args} />
    </div>
);

export const InputSearch: any = Template.bind({});
InputSearch.args = {
    name: 'search',
    label: '',
    inputError: '',
    type: 'other',
    typeInput: 'text',
    backgroundColor: 'white',
    height: 24,
    color: 'black',
    size: 24,
    padding: '12px',
    fontWeight: 'bold',
    colorLabel: 'black',
    colorIcon: colors.white,
    colorIconDiv: colors.purple,
    borderRadius: '5px',
    labelFontSize: 16,
    marginRight: -30,
    borderColor: 'black',
    placeholder: 'Pesquisar artigos',
    dataSearch: mockInputSearch,
    marginLeft: 8,
    fontSize: '16px',
    KEYS_TO_FILTERS: ['title'],
};
