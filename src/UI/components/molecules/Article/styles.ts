/* eslint-disable indent */
/* eslint-disable @typescript-eslint/no-unsafe-return */
import styled from 'styled-components';
import colors from '../../../../utils/colors';

export const Article = styled.section`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  background-color: red;
`;

export const ArticleImage = styled.div`
  width: 100%;
  padding: 16px;
  display: grid;
  justify-items: center;
  align-items: center;
`;

export const ArticleContent = styled.div`
  width: 100%;
  padding: 16px;
  display: grid;
  grid-gap: 16px;
`;

export const ArticleDateNewSite = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-left: 6px;
  padding-right: 6px;
  max-width: 100%;
  margin-top: 30px;
`;

export const ArticleParagraphs = styled.div`
  width: 100%;
`;

export const ArticleButton = styled.div`
  width: 40%;
`;
