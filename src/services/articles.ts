/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable @typescript-eslint/no-unsafe-return */
import api from './api';
import { sortFunction } from '../utils/functions';

export const ServiceHighlights = async (
  setArticles: any,
  setMessageError: any,
  onSort = false,
  value = { value: '' },
) => {
  await api
    .get('/articles')
    .then((response: any) => {
      if (onSort) {
        const sortArticles = response.data.sort((a: any, b: any) =>
          sortFunction(a, b, value.value),
        );
        setArticles(sortArticles);
        return sortArticles;
      }
      const articles = response.data;
      setArticles(articles);
      return articles;
    })
    .catch((err: any) => {
      setMessageError(err);
      return err;
    });
};
