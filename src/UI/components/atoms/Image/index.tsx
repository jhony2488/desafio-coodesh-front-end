/* eslint-disable quotes */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable prettier/prettier */
/* eslint-disable indent */
import React from 'react';
import { ImageInterface } from './interfaces';

import {
    Image
} from './styles';

const ImageComponent: React.FC<ImageInterface> = (
    {
        src = "../../../../assets/images/rocket.png",
        width = '100%',
        height = '100%',
        alt = "",
        title = "",
        ...rest
    }
) => {
    return (
        <>
            <Image src={src} width={width} height={height} alt={alt} title={title} {...rest} />
        </>
    );
};

export default ImageComponent;
