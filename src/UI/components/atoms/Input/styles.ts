/* eslint-disable indent */
import styled, { css } from 'styled-components';

import fonts from '../../../../utils/fonts';
import colors from '../../../../utils/colors';
import { ContainerProps, InputPropsLabel } from './interfaces';

export const Container = styled.div`
  min-width: 100%;
  max-width: 100%;
  margin-top: -10px;
`;

export const Label = styled.label<InputPropsLabel>`
  font-family: ${fonts.bold};
  font-size: ${(props) => props.labelFontSize}px;
  margin-bottom: 11px;
  font-weight: ${(props) => props.fontWeight};
  color: ${(props) => props.colorLabel};
`;

export const ContainerInput = styled.div<ContainerProps>`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
  height: ${(props) => props.height}px;
  padding: 0 5px;
  border-radius: ${(props) => props.borderRadius || '10px'};
  background-color: ${(props) => props.backgroundColor || 'white'};

  align-content: center;
  border: 1.5px solid black;
  ${(props) =>
    props.isFocused &&
    css`
      border-color: #666666;
    `}
  &:focus-within {
    border: 2.5px solid;
    border-color: ${(props) => props.borderColor || '#666666'};
  }
  &:focus {
    border: 2.5px solid;
    border-color: ${(props) => props.borderColor || '#666666'};
  }
  ${(props) =>
    props.isErrored &&
    css`
      border-color: #c53030;
    `}
  padding: ${(props) => props.padding || '10px'};
`;

export const ContainerSearchPreview = styled.div`
  display: block;
  width: 100%;
  z-index: 0;
`;

export const ContainerSearchPreviewItems = styled.ul`
  width: calc(100% - 16px);
  background-color: white;
  position: relative;

  margin-top: -20px;
  margin-left: 0px;
  padding-top: 8px;
  padding-bottom: 8px;
  border: 1px solid purple;
  border-top: 0px;
  padding-bottom: 16px;
  transition: all 0.7s;
`;

export const ContainerSearchPreviewItem = styled.li`
  display: grid;
  justify-items: start;
  justify-content: start;
  width: 100%;
  min-width: 100%;
  margin-left: -7%;
  margin-top: 8px;
  cursor: pointer;
`;

export const ErrorText = styled.p`
  color: ${colors.red};
  padding-left: 10px;
  font-family: ${fonts.regular};
  margin-bottom: 10px;
  font-size: 16px;
`;
