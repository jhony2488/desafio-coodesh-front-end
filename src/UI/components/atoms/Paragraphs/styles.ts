/* eslint-disable indent */
/* eslint-disable @typescript-eslint/no-unsafe-return */
import styled from 'styled-components';
import colors from '../../../../utils/colors';
import { ParagraphsStyleInterface, DateDivStyleInterface } from './interfaces';

export const Paragraphs = styled.p<ParagraphsStyleInterface>`
  font-family: 'Roboto Condensed', sans-serif;
  color: ${(props: ParagraphsStyleInterface) => props.color};
  font-size: ${(props: ParagraphsStyleInterface) => props.fontSize};
  font-weight: ${(props: ParagraphsStyleInterface) => props.fontWeight};
  text-align: ${(props: ParagraphsStyleInterface) => props.textAlign};
  line-height: 1.5;
`;

export const Date = styled.p<ParagraphsStyleInterface>`
  font-family: 'Roboto Condensed', sans-serif;
  color: ${(props: ParagraphsStyleInterface) => props.color};
  font-size: ${(props: ParagraphsStyleInterface) => props.fontSize};
  font-weight: ${(props: ParagraphsStyleInterface) => props.fontWeight};
  text-align: ${(props: ParagraphsStyleInterface) => props.textAlign};
  line-height: 1.5;
`;

export const DivItemNewsSite = styled.div<DateDivStyleInterface>`
  width: 100%;
  height: 100%;
  background-color: ${(props: DateDivStyleInterface) => props.backgroundColor};
  border: 2px solid ${colors.purple} ${(props: DateDivStyleInterface) => props.borderColor};
  padding-left: 3px;
  padding-right: 3px;
  padding-top: 0px;
  padding-bottom: 0px;
`;

export const ItemNewsSite = styled.p<ParagraphsStyleInterface>`
  font-family: 'Roboto Condensed', sans-serif;
  color: ${(props: ParagraphsStyleInterface) => props.color};
  font-size: ${(props: ParagraphsStyleInterface) => props.fontSize};
  font-weight: ${(props: ParagraphsStyleInterface) => props.fontWeight};
  text-align: ${(props: ParagraphsStyleInterface) => props.textAlign};
  line-height: 15px;
`;
