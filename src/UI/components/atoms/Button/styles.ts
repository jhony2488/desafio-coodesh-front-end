/* eslint-disable indent */
/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable prettier/prettier */
import styled from 'styled-components';

import colors from '../../../../utils/colors';

import fonts from '../../../../utils/fonts';

import { ButtonProps, CircleProps } from './interfaces';

import { Spin, Spin2 } from './animations';

export const ButtonComponent = styled.button<ButtonProps>`
    font-family: ${fonts.bold};

    color: ${({ variant }) => (variant === 'secondary' ? colors.purple : colors.white)};

    font-size: ${(props) => props.fontSize};

    width: 100%;
    height: ${(props) => props.height};

    background-color: ${({ variant, disabled }) =>
        disabled ? colors.gray : variant === 'secondary' ? 'transparent' : colors.orange};
    border-radius: 5px;
    border: ${({ variant, disabled }) =>
        disabled
            ? colors.gray
            : variant === 'secondary'
            ? colors.purple + ' ' + 'solid 1px'
            : colors.orange};
    opacity: ${(props) => (props.loading ? 0.5 : 1)};
    display: grid;
    justify-items: center;
    align-items: center;
    cursor: ${(props) => (props.loading ? null : 'pointer')};
    transition: all 1.2s;
    &:hover {
        -webkit-box-shadow: ${(props) =>
            props.loading ? null : '-4px 3px 16px 3px rgba(0, 0, 0, 0.26)'};
        box-shadow: ${(props) => (props.loading ? null : '-4px 3px 16px 3px rgba(0, 0, 0, 0.26)')};
        background: ${({ variant, disabled, loading }) =>
            !loading
                ? variant === 'secondary'
                    ? colors.purple
                    : colors.orange
                : variant === 'primary'
                ? colors.orange
                : 'transparent'};
        color: ${colors.white};
    }
`;

export const CircleRotate = styled.div<CircleProps>`
    width: ${({ width }) => width};
    height: ${({ height }) => height};
    animation: ${Spin} 1s infinite linear;
    -webkit-animation: ${Spin2} 1s infinite linear;
    border-radius: 100%;
    border: 2.5px solid ${({ variant }) => (variant === 'secondary' ? colors.purple : colors.white)};
    background: transparent;
`;
