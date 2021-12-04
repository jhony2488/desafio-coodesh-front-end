/* eslint-disable quotes */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable prettier/prettier */
/* eslint-disable indent */
import React from 'react';
import { SelectInterface } from './interfaces';
import 'react-dropdown-now-with-space/style.css';
import { options } from '../../../../utils/select';

import {
    Select,
} from './styles';

const SelectComponent: React.FC<SelectInterface> = (
    {
        name = "nome select",
        onChange = (value: string) => console.log(value),
        defaultValue = "",
        placeholder = "Select",
        className = "select",
        disabled = false,
        isTwo = false,
    }
) => {
    return (
        <>
            <Select
                className={className}
                placeholder={placeholder}
                options={options}
                value={defaultValue}
                onChange={onChange}
                alt={name}
                isTwo={isTwo}
                disabled={disabled}
            />
        </>
    );
};

export default SelectComponent;
