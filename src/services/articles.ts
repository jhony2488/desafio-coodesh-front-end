/* eslint-disable indent */
/* eslint-disable prettier/prettier */
import api from './api';
export const ServiceHighlights = async (setArticles, setMessageError) => {
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
