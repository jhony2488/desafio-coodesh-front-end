/* eslint-disable quotes */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable prettier/prettier */
/* eslint-disable indent */
import React, { useContext } from 'react';
import { SelectInterface } from './interfaces';
import 'react-dropdown-now-with-space/style.css';
import { options } from '../../../../utils/select';
import { ArticlesContext } from '../../../../context/Articles';
import { dateFormat } from '../../../../utils/functions';

import {
    Select,
} from './styles';

const SelectComponent: React.FC<SelectInterface> = (
    {
        name = "nome select",
        defaultValue = "",
        placeholder = "Select",
        className = "select",
        disabled = false,
        isTwo = false,
    }
) => {
    const { articles, setArticles } = useContext(ArticlesContext);

    const onChange = (value: any) => {
        console.log(value);
        if (value.value == 'Mais antigas') {
            const sortArticles = articles.sort((a, b) => dateFormat(a.updatedAt) > dateFormat(b.updatedAt));
            setArticles(sortArticles);
            console.log(2);
            return;
        }
        console.log(1);
        const sortArticles = articles.sort((a, b) => dateFormat(a.updatedAt) < dateFormat(b.updatedAt));
        setArticles(sortArticles);
    };
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
