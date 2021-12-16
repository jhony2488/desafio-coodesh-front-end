/* eslint-disable prettier/prettier */
/* eslint-disable indent */
import React from 'react';

import { ButtonComponent, CircleRotate } from './styles';

import { ButtonPropsComponent } from './interfaces';

export const Button: React.FC<ButtonPropsComponent> = (
    {
        loading = false,
        children = 'Button',
        variant = 'primary',
        mini = false,
        max = false,
        height = '50px',
        widthCircle = '32px',
        heightCircle = '32px',
        fontSize = '16px',
        onClick = () => { },
    }
) => {
    return (
        <ButtonComponent onClick={onClick} loading={loading} mini={mini} max={max} variant={variant} height={height} fontSize={fontSize} disabled={false} >{loading ? <CircleRotate width={widthCircle} height={heightCircle} variant={variant} /> : children}
        </ButtonComponent>
    );
};
