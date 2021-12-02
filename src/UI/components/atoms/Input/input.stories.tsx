import React from 'react';

import Input from './index';
import colors from '../../../../utils/colors'
import { mockInputSearch } from '../../../../utils/input'

export default {
    title: 'Input',
    component: Input,
};

const Template = (args: any) => <div style={{ display: 'grid', justifyItems: 'center', justifyContent: 'start', width: 400, backgroundColor: colors.purple, padding: 10, marginLeft: 12, marginRight: 12 }}><Input {...args} /></div>;

export const InputSearch: any = Template.bind({});
InputSearch.args = {
    icon: "search",
    name: "search",
    label: "",
    secureTextEntry: false,
    required: true,
    inputError: "",
    type: 'other',
    typeInput: "text",
    backgroundColor: 'white',
    height: 32,
    color: 'black',
    size: 28,
    padding: "12px",
    fontWeight: "bold",
    colorLabel: 'black',
    colorIcon: colors.purple,
    borderRadius: "5px",
    labelFontSize: 16,
    marginRight: -19,
    borderColor: 'black',
    placeholder: "Pesquisar aqui",
    dataSearch: mockInputSearch,
    marginLeft: 18,
    fontSize: '16px',
    filterPreviewSearch: (datas:any, data:any) => {
        return [datas, data]
    },
    onChange: (value: any) => {
        console.log(value.currentTarget.value);
    },
    returnName: (value: any) => {
        return value.name
    }
};
