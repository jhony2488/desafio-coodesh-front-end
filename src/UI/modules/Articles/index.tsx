/* eslint-disable react/no-children-prop */
/* eslint-disable quotes */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable prettier/prettier */
/* eslint-disable indent */
import React, { useEffect, useState, useContext } from 'react';
import 'react-responsive-modal/styles.css';
import { Modal } from 'react-responsive-modal';
import { Button } from '../../components/atoms/Button';
import Article from '../../components/molecules/Article';
import { ServiceHighlights } from '../../../services/articles';
import { parOrImpar } from '../../../utils/functions';
import { ArticlesContext } from '../../../context/Articles';

import {
    Articles,
    ArticlesWrapper,
    ButtonDiv,
    ButtonWrapper,
    MessagesErr
} from './styles';

const ArticlesComponent: React.FC = () => {
    const [messagesErr, setMessageErr] = useState('');
    const [pageScrool, setPageScrool] = useState(1);
    const [articlesFilterScrool, setArticlesFilterScrool] = useState([]);
    const [article, setArticle] = useState({
        "id": 13085,
        "title": "Here’s why Elon Musk asked his SpaceX employees to work Thanksgiving",
        "url": "https://arstechnica.com/science/2021/12/heres-why-elon-musk-asked-his-spacex-employees-to-work-thanksgiving/",
        "imageUrl": "https://cdn.arstechnica.net/wp-content/uploads/2019/02/Raptor1.jpg",
        "newsSite": "Arstechnica",
        "summary": "A fully operational Starship solves many of SpaceX's problems.",
        "publishedAt": "2021-12-01T16:17:56.000Z",
        "updatedAt": "2021-12-01T16:27:33.585Z",
        "featured": false,
        "launches": [],
        "events": []
    });
    const { articles, setArticles } = useContext(ArticlesContext);

    const [isOpen, setIsOpen] = useState(false);

    function toggleModal() {
        setIsOpen(!isOpen);
    }
    function linkPageArticle(link: string) {
        window.open(link, "_blank");
    }

    useEffect(() => {
        void ServiceHighlights(setArticles, setMessageErr, false, { value: '' });
    }, []);

    useEffect(() => {
        if (articles && articles != []) {
            if (articles.length - articlesFilterScrool.length == 1) {
                setArticlesFilterScrool(articles);
            }
            else if (articles.length - articlesFilterScrool.length == 2) {
                setArticlesFilterScrool(articles.slice(0, articles.length - 2));
            }
            else {
                setArticlesFilterScrool(articles.slice(0, 3 * pageScrool));
            }
        }
    }, [articles, pageScrool]);

    return (
        <>
            <Modal open={isOpen} onClose={() => toggleModal()} center focusTrapped={false}>
                <Article
                    src={article.imageUrl}
                    widthImage='100%'
                    heightImage='100%'
                    title={article.title}
                    content={article.summary}
                    newSite={article.newsSite}
                    date={article.updatedAt}
                    handleButton={() => linkPageArticle(article.url)}
                    isPar={true}
                />
            </Modal>
            <Articles>
                <ArticlesWrapper>
                    {articles && articles.length > 0 && (
                        articlesFilterScrool.map((item: any, key: any) => {
                            const isPar = parOrImpar(key);

                            return (
                                <Article
                                    key={key}
                                    src={item.imageUrl}
                                    widthImage='100%'
                                    heightImage='100%'
                                    title={item.title}
                                    content={item.summary}
                                    newSite={item.newsSite}
                                    date={item.updatedAt}
                                    handleButton={() => {
                                        toggleModal();
                                        setArticle(item);
                                    }}
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
                    {messagesErr == '' && articles != articlesFilterScrool && (
                        <ButtonDiv>
                            <ButtonWrapper>
                                <Button
                                    variant='secondary'
                                    children='Ver Mais'
                                    onClick={() => setPageScrool(pageScrool + 1)}
                                    widthCircle='32px'
                                    heightCircle='32px'
                                />
                            </ButtonWrapper>
                        </ButtonDiv>

                    )}
                </ArticlesWrapper>
            </Articles>
            <Modal
                isOpen={isOpen}
                onBackgroundClick={toggleModal}
                onEscapeKeydown={toggleModal}>
                <span>I am a modal!</span>
                <button onClick={toggleModal}>Close me</button>
            </Modal>
        </>
    );
};

export default ArticlesComponent;
