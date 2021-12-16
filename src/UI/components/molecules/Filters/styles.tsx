/* eslint-disable indent */
/* eslint-disable @typescript-eslint/no-unsafe-return */
import styled from 'styled-components';

export const Filters = styled.div`
  width: 100%;
  display: grid;
  justify-items: end;
  align-items: center;
  height: 100%;
  @media (max-width: 1080px) {
    justify-items: center;
  }
`;

export const FiltersWrapper = styled.div`
  width: 40%;
  display: grid;
  grid-template-columns: 2fr 1fr;
  justify-items: center;
  align-items: center;
  height: 100%;
  @media (max-width: 1080px) {
    grid-template-columns: 1fr;
    width: 90%;
  }
`;
