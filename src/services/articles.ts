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
  let res
  await api
    .get('/articles')
    .then((response: any) => {
      if (onSort) {
        const sortArticles = response.data.sort((a: any, b: any) =>
          sortFunction(a, b, value.value),
        );
        setArticles(sortArticles);
        res=response.status
        return res.status;
      }
      const articles = response.data;
      setArticles(articles);
      res=response.status;
      return res.status;
    })
    .catch((err: any) => {
      setMessageError(err);
      return err;
    });
    return res
};
