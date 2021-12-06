/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable @typescript-eslint/no-unsafe-return */
import api from './api';
import { infiniteScrool } from '../utils/functions';

export const ServiceHighlights = async (
  setArticles: any,
  setMessageError: any,
  page: number,
  scroolSize: number,
) => {
  await api
    .get('/articles')
    .then((response: any) => {
      const articles = infiniteScrool(page * scroolSize, response.data, scroolSize);
      setArticles(articles);
      return articles;
    })
    .catch((err: any) => {
      setMessageError(err);
      return err;
    });
};
