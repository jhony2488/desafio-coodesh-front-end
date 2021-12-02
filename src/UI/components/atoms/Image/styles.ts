/* eslint-disable indent */
import styled from 'styled-components';
import { ImageInterface } from './interfaces';

export const Image = styled.img<ImageInterface>`
    width: ${(props: ImageInterface) => props.width};
    height: ${(props: ImageInterface) => props.height};
`;
