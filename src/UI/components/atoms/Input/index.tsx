/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable prettier/prettier */
/* eslint-disable indent */
import React, { useState, useEffect, forwardRef } from 'react';
import { useForm } from 'react-hook-form';
import { BiSearch } from 'react-icons/bi';
import SearchInput, { createFilter } from 'react-search-input';

//import { filterPreviewSearch } from '../../../utils/functions';
import fonts from '../../../../utils/fonts';
import colors from '../../../../utils/colors';
import { InputProps, InputRef } from './interfaces';

import {
    Container,
    Label,
    ContainerInput,
    ErrorText,
    ContainerSearchPreview,
    ContainerSearchPreviewItems,
    ContainerSearchPreviewItem,
} from './styles';

const Input: React.ForwardRefRenderFunction<InputRef, InputProps> = (
    {
        name,
        label,
        inputError,
        backgroundColor = 'white',
        height = 26,
        color = 'black',
        size = 32,
        borderRadius = '60px',
        labelFontSize = 22,
        padding = '12px',
        fontWeight = '500',
        colorLabel = 'black',
        colorIcon = colors.white,
        colorIconDiv = colors.purple,
        marginRight,
        borderColor,
        placeholder,
        dataSearch = [{ id: 1, title: 'Desenvolvimento de sites' }],
        KEYS_TO_FILTERS = ['title'],
        marginLeft = 18,
        fontSize = '16px'
    }
) => {
    const [isFocused, setIsFocused] = useState(false);

    const [isErrored, setIsErrored] = useState(false);
    const [isListSearch, setIsListSearch] = useState(true);
    const [isNotListSearch, setIsNotListSearch] = useState(false);
    const [filterPreviewSearchValue, setFilterPreviewSearchValue] = useState('');
    const [filtered, setFiltered] = useState([]);
    const [valueSearch, setValueSearch] = useState('');
    const { getValues, setValue } = useForm();

    const handleIconClick = () => {

    };

    const getNameSearch = (value: string) => {
        setValue(name, value);
        setFilterPreviewSearchValue(value);
        setValueSearch(value);
        if (!isNotListSearch) {
            setIsListSearch(true);
        }
        else {
            setIsListSearch(false);
            setIsNotListSearch(false);
        }
    };

    useEffect(() => {
        setFiltered(dataSearch.filter(createFilter(filterPreviewSearchValue, KEYS_TO_FILTERS)));
    }, [filterPreviewSearchValue]);

    useEffect(() => {
        if (inputError) {
            setIsErrored(true);
        } else {
            setIsErrored(false);
        }
    }, [inputError]);

    return (
        <>
            <style dangerouslySetInnerHTML={{
                __html: [
                    `
                        ::-webkit-input-placeholder {
                        color: ${color};,
                        },
                    .money-input:-moz-placeholder {
                        color: ${color};
                        }
                    .money-input:focus {
                        box - shadow: 0 0 0 0;
                        outline: 0;
                    }
                    textarea:focus, input:focus {
                        box-shadow: 0 0 0 0;
                        outline: 0;
                    }
                        `
                ].join('\n')
            }}>
            </style>
            <Container>
                <Label colorLabel={colorLabel} fontWeight={fontWeight} labelFontSize={labelFontSize} for={name}>{
                    label}
                </Label>
                <ContainerInput isSearch={filtered.length == 0 ? false : true} borderColor={borderColor} padding={padding} borderRadius={borderRadius} isFocused={isFocused} isErrored={isErrored} backgroundColor={backgroundColor} height={height}>
                    <SearchInput style={{
                        flex: 1,
                        alignItems: 'center',
                        fontSize,
                        fontFamily: fonts.regular,
                        opacity: 1,
                        width: '100%',
                        height: `${height - 5}px`,
                        borderRadius: borderRadius || '10px',
                        border: '0px',
                        color: color || 'black',
                        backgroundColor: backgroundColor || 'white',
                        flexShrink: 1,
                        padding: padding || '10px',
                        '::-webkit-input-placeholder': {
                            color: color || 'black',
                        },
                        '&:-moz-placeholder': {
                            color: color || 'black',
                        },
                        '&:focus': {
                            boxShadow: '0 0 0 0',
                            outline: 0,
                        }
                    }} className="" type="text" onChange={getNameSearch} placeholder={placeholder} value={valueSearch} />
                    <>
                        <div style={{ marginRight, marginLeft, backgroundColor: colorIconDiv, padding: '5px', cursor: 'pointer' }}>
                            <BiSearch onClick={() => handleIconClick()} color={colorIcon} size={size} />
                        </div>
                    </>
                </ContainerInput>
                <ErrorText>{inputError}</ErrorText>
            </Container>
            {(filterPreviewSearchValue.length != 0 && filtered.length != 0 && isListSearch) && (
                <ContainerSearchPreview>
                    <ContainerSearchPreviewItems key={filtered.length}>
                        {filtered.map((value: any, index) => {
                            return (
                                <ContainerSearchPreviewItem key={index} onClick={() => {
                                    setValueSearch(value.title);
                                    setIsNotListSearch(true);
                                    return setIsListSearch(false);
                                }}>{value.title || ''}</ContainerSearchPreviewItem>
                            );
                        })
                        }
                    </ContainerSearchPreviewItems>
                </ContainerSearchPreview>
            )
            }
        </>
    );
};

export default forwardRef(Input);
