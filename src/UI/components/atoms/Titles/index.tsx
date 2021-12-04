/* eslint-disable quotes */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable prettier/prettier */
/* eslint-disable indent */
import React from 'react';
import { TitleInterface } from './interfaces';

import {
    TitleH1,
    TitleH2,
    TitleH3,
    TitleH4,
    TitleH5,
    TitleH6,
} from './styles';

const TitleComponent: React.FC<TitleInterface> = (
    {
        content = "nome select",
        color = "",
        fontSize = "",
        type = "h1",
        fontWeight = "bold",
        ...rest
    }
) => {
    return (
        <>
            {type == 'h1' && <TitleH1 color={color} title={content} fontSize={fontSize} fontWeight={fontWeight} {...rest} >
                {content}
            </TitleH1>}
            {type == 'h2' && <TitleH2 color={color} title={content} fontSize={fontSize} fontWeight={fontWeight} {...rest}>
                {content}
            </TitleH2>}
            {type == 'h3' && <TitleH3 color={color} title={content} fontSize={fontSize} fontWeight={fontWeight} {...rest}>
                {content}
            </TitleH3>}
            {type == 'h4' && <TitleH4 color={color} title={content} fontSize={fontSize} fontWeight={fontWeight} {...rest}>
                {content}
            </TitleH4>}
            {type == 'h5' && <TitleH5 color={color} title={content} fontSize={fontSize} fontWeight={fontWeight} {...rest}>
                {content}
            </TitleH5>}
            {type == 'h6' && <TitleH6 color={color} title={content} fontSize={fontSize} fontWeight={fontWeight} {...rest}>
                {content}
            </TitleH6>}
        </>
    );
};

export default TitleComponent;
