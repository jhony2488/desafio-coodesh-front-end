/* eslint-disable indent */
/* eslint-disable @typescript-eslint/no-unsafe-return */
import styled from 'styled-components';
import colors from '../../../utils/colors';

export const Articles = styled.div`
  width: 100%;
  display: grid;
  justify-items: center;
  align-items: start;
`;

export const ArticlesWrapper = styled.div`
  width: 100%;
  max-width: 800px;
  padding-bottom: 40px;
`;

export const ButtonDiv = styled.div`
  width: 100%;
  display: grid;
  justify-items: center;
  align-items: center;
  margin-top: 28px;
  margin-bottom: 24px;
`;

export const ButtonWrapper = styled.div`
  width: 30%;
`;

export const MessagesErr = styled.p`
  font-size: 24px;
  color: ${colors.red};
  text-align: center;
`;
