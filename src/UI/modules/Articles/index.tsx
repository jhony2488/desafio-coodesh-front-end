/* eslint-disable react/no-children-prop */
/* eslint-disable quotes */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable prettier/prettier */
/* eslint-disable indent */
import React, { useEffect, useState, useContext } from 'react';
import { Button } from '../../components/atoms/Button';
import Article from '../../components/molecules/Article';
import { ServiceHighlights } from '../../../services/articles';
import { parOrImpar, infiniteScrool } from '../../../utils/functions';
import { ArticlesContext } from '../../../context/Articles';

import {
    Articles,
    ArticlesWrapper,
    MessagesErr
} from './styles';

const ArticlesComponent: React.FC = () => {
    const [messagesErr, setMessageErr] = useState('');
    const [pageScrool, setPageScrool] = useState(1);
    const { articles, setArticles } = useContext(ArticlesContext);

    useEffect(() => {
        void ServiceHighlights(setArticles, setMessageErr, 1, 3);
    }, []);

    return (
        <>
            <Articles>
                <ArticlesWrapper>
                    {articles && articles.length > 0 && (
                        articles.map((item: any, key) => {
                            const isPar = parOrImpar(key);

                            return (
                                <Article
                                    key={key}
                                    src={item.imageUrl}
                                    widthImage='100%'
                                    heightImage='70%'
                                    title={item.title}
                                    content={item.summary}
                                    newSite={item.newsSite}
                                    date={item.updatedAt}
                                    handleButton={() => { }}
                                    isPar={isPar == 'Par' ? true : false}
                                />
                            );
                        })
                    )}
                    {messagesErr != '' && (
                        <MessagesErr>
                            {messagesErr}
                        </MessagesErr>
                    )}
                    {messagesErr == '' && (
                        <Button
                            variant='secondary'
                            children='Ver Mais'
                            onClick={() => handleSetArticlesInfiniteScrool()}
                            widthCircle='32px'
                            heightCircle='32px'
                        />
                    )}
                </ArticlesWrapper>
            </Articles>
        </>
    );
};

export default ArticlesComponent;
