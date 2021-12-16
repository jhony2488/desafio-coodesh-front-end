/* eslint-disable quotes */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable prettier/prettier */
/* eslint-disable indent */
import React, { useEffect, useState } from 'react';
import colors from '../../../../utils/colors';
import { ParagraphsInterface } from './interfaces';
import { dateFormat, } from '../../../../utils/functions';

import {
    DivItemNewsSite,
    Paragraphs,
    Date,
    ItemNewsSite
} from './styles';

const ParagraphsComponent: React.FC<ParagraphsInterface> = (
    {
        content = "nome select",
        color = "",
        fontSize = "",
        fontWeight = "bold",
        textAlign = "left",
        type = 'Paragraph',
        backgroundColor = colors.purple,
        borderColor="",
        ...rest
    }
) => {
    const [valueDate, setValueDate] = useState('');

    useEffect(() => {
        if (type == 'Date') {
            const date: string = dateFormat(content);
            setValueDate(date);
        }
    });

    return (
        <>
            {type == 'Paragraph' && <Paragraphs color={color} title={content} fontSize={fontSize} fontWeight={fontWeight} textAlign={textAlign} {...rest} >
                {content}
            </Paragraphs>}
            {type == 'Date' && <Date color={color} title={content} fontSize={fontSize} fontWeight={fontWeight} textAlign={textAlign} {...rest} >
                {valueDate || ''}
            </Date>}
            {type == 'ItemNewsSite' &&
                <DivItemNewsSite backgroundColor={backgroundColor} title={content} fontSize={fontSize} borderColor={borderColor}>
                    <ItemNewsSite color={color} title={content} fontSize={fontSize} fontWeight={fontWeight} textAlign={textAlign} {...rest} >
                        {content}
                    </ItemNewsSite>
                </DivItemNewsSite>}
        </>
    );
};

export default ParagraphsComponent;
