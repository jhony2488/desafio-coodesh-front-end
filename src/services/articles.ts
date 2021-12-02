/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable indent */
/* eslint-disable prettier/prettier */
import api from './api';
export const ServiceHighlights = async (setArticles: any, setMessageError: any) => {
    await api
        .get('/articles')
        .then((response) => {
            setArticles(response.data);
            return response.data;
        })
        .catch((err) => {
            setMessageError(err);
        });
};
