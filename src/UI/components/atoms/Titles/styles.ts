/* eslint-disable indent */
import styled from 'styled-components';
import { TitleStyleInterface } from './interfaces';

export const TitleH1 = styled.h1<TitleStyleInterface>`
    font-family: 'Roboto Condensed', sans-serif;
    color: ${(props: TitleStyleInterface) => props.color};
    font-size: ${(props: TitleStyleInterface) => props.fontSize};
    font-weight: ${(props: TitleStyleInterface) => props.fontWeight};
    line-height: 1.5;
`;
export const TitleH2 = styled.h2<TitleStyleInterface>`
    font-family: 'Roboto Condensed', sans-serif;
    color: ${(props: TitleStyleInterface) => props.color};
    font-size: ${(props: TitleStyleInterface) => props.fontSize};
    font-weight: ${(props: TitleStyleInterface) => props.fontWeight};
    line-height: 1.5;
`;
export const TitleH3 = styled.h3<TitleStyleInterface>`
    font-family: 'Roboto Condensed', sans-serif;
    color: ${(props: TitleStyleInterface) => props.color};
    font-size: ${(props: TitleStyleInterface) => props.fontSize};
    font-weight: ${(props: TitleStyleInterface) => props.fontWeight};
    line-height: 1.5;
`;
export const TitleH4 = styled.h4<TitleStyleInterface>`
    font-family: 'Roboto Condensed', sans-serif;
    color: ${(props: TitleStyleInterface) => props.color};
    font-size: ${(props: TitleStyleInterface) => props.fontSize};
    font-weight: ${(props: TitleStyleInterface) => props.fontWeight};
    line-height: 1.5;
`;
export const TitleH5 = styled.h5<TitleStyleInterface>`
    font-family: 'Roboto Condensed', sans-serif;
    color: ${(props: TitleStyleInterface) => props.color};
    font-size: ${(props: TitleStyleInterface) => props.fontSize};
    font-weight: ${(props: TitleStyleInterface) => props.fontWeight};
    line-height: 1.5;
`;
export const TitleH6 = styled.h6<TitleStyleInterface>`
    font-family: 'Roboto Condensed', sans-serif;
    color: ${(props: TitleStyleInterface) => props.color};
    font-size: ${(props: TitleStyleInterface) => props.fontSize};
    font-weight: ${(props: TitleStyleInterface) => props.fontWeight};
    line-height: 1.5;
`;
