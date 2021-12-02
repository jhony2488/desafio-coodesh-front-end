import React, {
    useState,
    useEffect,
    useImperativeHandle,
    forwardRef,
    useCallback,
} from 'react';
import { Controller, useForm } from 'react-hook-form';
import { BsFillEyeFill, BsEyeSlashFill, BsSearch, } from 'react-icons/bs';
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
        icon,
        label,
        secureTextEntry,
        required,
        control = () => { },
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
        colorIcon = colors.orange,
        marginRight,
        borderColor,
        placeholder,
        dataSearch = [{ id: 1, name: 'Desenvolvimento de sites' }],
        filterPreviewSearch = (datas: any[], data: string) => {
            const dataFilter = datas.filter((value) => {
                return value.name == data
            })
            return dataFilter;
        },
        KEYS_TO_FILTERS = ['name'],
        marginLeft = 18,
        rows = 10,
        cols = 33,
        fontSize = '16px',
        ...rest
    }
) => {
    const [isFocused, setIsFocused] = useState(false);
    const [isFilled, setIsFilled] = useState(false);

    const [isErrored, setIsErrored] = useState(false);
    const [inputSecureTextEntry, setInputSecureTextEntry] = useState(true);
    const [filterPreviewSearchValue, setFilterPreviewSearchValue] = useState('');
    const [filtered, setFiltered] = useState([]);
    const { register, getValues, setFocus, setValue } = useForm();

    const Register = register(name);

    const handleInputFocus = useCallback(() => {
        setIsFocused(true);
    }, []);
    const handleInputBlur = useCallback(() => {
        setIsFocused(false);
        setIsFilled(!!getValues(name));
    }, []);
    const handleIconClick = () => {
        setIsFocused(!isFocused);
        setInputSecureTextEntry(!inputSecureTextEntry);
    };

    useImperativeHandle(Register.ref, () => ({
        focus() {
            setFocus(name);
        },
    }));

    const getNameSearch = (value: string) => {
        console.log(value)
        setValue(name, value);
        setFilterPreviewSearchValue(value);
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
                            }} className="" type="text" onChange={getNameSearch} />

                            <>
                                <div style={{ marginRight, marginLeft }}>
                                    <BsSearch onClick={() => handleIconClick()} color={colorIcon} size={size} />
                                </div>
                            </>
                    </ContainerInput>
                <ErrorText>{inputError}</ErrorText>
            </Container>
            {(icon == 'search' && filterPreviewSearchValue.length != 0 && filtered.length != 0) && (
                <ContainerSearchPreview>
                    <ContainerSearchPreviewItems key={filtered.length}>
                        {filtered.map((value:any, index) => {
                            return (
                                <ContainerSearchPreviewItem key={index} onClick={() => { }}>{value.title || 'jhony'}</ContainerSearchPreviewItem>
                            )
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
