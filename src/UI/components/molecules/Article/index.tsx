/* eslint-disable react/no-children-prop */
/* eslint-disable quotes */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable prettier/prettier */
/* eslint-disable indent */
import React, { useEffect, useState } from 'react';
import { useMediaQuery } from 'react-responsive';
import Image from '../../atoms/Image';
import { ArticleInterface } from './interfaces';
import Title from '../../atoms/Titles';
import Paragraphs from '../../atoms/Paragraphs';
import { Button } from '../../atoms/Button';
import colors from '../../../../utils/colors';

import {
    Article,
    ArticleImage,
    ArticleContent,
    ArticleDateNewSite,
    ArticleParagraphs,
    ArticleButton
} from './styles';

const ArticleComponent: React.FC<ArticleInterface> = (
    {
        src = "../../../../assets/images/rocket.png",
        widthImage = '100%',
        heightImage = '100%',
        title = "",
        content = "",
        newSite = "",
        date = "",
        handleButton = () => { },
        isPar = true,
    }) => {
    const isMobile = useMediaQuery({ query: '(max-width: 500px)' });
    const isTablet = useMediaQuery({ query: '(max-width: 1080px)' });

    return (
        <>
            {(isPar || isMobile || isTablet) &&
                <Article>
                    <ArticleImage>
                        <Image
                            src={src}
                            width={widthImage}
                            height={heightImage}
                            alt={title}
                            title={title}
                        />
                    </ArticleImage>
                    <ArticleContent>
                        <div>
                            <div style={{ marginBottom: '-26px' }}>
                                <Title
                                    content={title}
                                    color={colors.black}
                                    fontSize={isMobile ? '42' : isTablet ? '48' : '56'}
                                    type="h2"
                                    fontWeight="500"
                                />
                            </div>
                            <ArticleDateNewSite>
                                <Paragraphs
                                    content={date}
                                    color={colors.black}
                                    fontSize={isMobile ? '10px' : isTablet ? '12px' : '14px'}
                                    fontWeight="400"
                                    textAlign="left"
                                    type='Date'
                                />
                                <div>
                                    <Paragraphs
                                        content={newSite}
                                        color={colors.white}
                                        fontSize={isMobile ? '7px' : isTablet ? '9px' : '11px'}
                                        fontWeight="400"
                                        textAlign='center'
                                        type='ItemNewsSite'
                                        backgroundColor={colors.purple}
                                        borderColor={colors.black}
                                    />
                                </div>
                            </ArticleDateNewSite>
                            <ArticleParagraphs>
                                <Paragraphs
                                    content={content}
                                    color={colors.black}
                                    fontSize={isMobile ? '12px' : isTablet ? '14px' : '16px'}
                                    fontWeight="400"
                                    textAlign="left"
                                />
                            </ArticleParagraphs>
                            <ArticleButton>
                                <Button
                                    variant='primary'
                                    children='Ver Mais'
                                    onClick={handleButton}
                                    widthCircle='32px'
                                    heightCircle='32px'
                                />
                            </ArticleButton>
                        </div>
                    </ArticleContent>
                </Article>}

            {!isPar && !isMobile && !isTablet &&
                <Article>
                    <ArticleContent>
                        <div>
                            <div style={{ marginBottom: '-16px' }}>
                                <Title
                                    content={title}
                                    color={colors.black}
                                    fontSize={isMobile ? '42' : isTablet ? '48' : '56'}
                                    type="h2"
                                    fontWeight="bold"
                                />
                            </div>
                            <ArticleDateNewSite>
                                <Paragraphs
                                    content={date}
                                    color={colors.black}
                                    fontSize={isMobile ? '10px' : isTablet ? '12px' : '14px'}
                                    fontWeight="400"
                                    textAlign="left"
                                    type='Date'
                                />
                                <div>
                                    <Paragraphs
                                        content={newSite}
                                        color={colors.white}
                                        fontSize={isMobile ? '7px' : isTablet ? '9px' : '11px'}
                                        fontWeight="400"
                                        textAlign='center'
                                        type='ItemNewsSite'
                                        backgroundColor={colors.purple}
                                        borderColor={colors.black}
                                    />
                                </div>
                            </ArticleDateNewSite>
                            <ArticleParagraphs>
                                <Paragraphs
                                    content={content}
                                    color={colors.black}
                                    fontSize={isMobile ? '12px' : isTablet ? '14px' : '16px'}
                                    fontWeight="400"
                                    textAlign="left"
                                />
                            </ArticleParagraphs>
                            <ArticleButton>
                                <Button
                                    variant='primary'
                                    children='Ver Mais'
                                    onClick={handleButton}
                                    widthCircle='32px'
                                    heightCircle='32px'
                                />
                            </ArticleButton>
                        </div>
                    </ArticleContent>
                    <ArticleImage style={{ marginLeft: '12px' }}>
                        <Image
                            src={src}
                            width={widthImage}
                            height={heightImage}
                            alt={title}
                            title={title}
                        />
                    </ArticleImage>
                </Article>}
        </>
    );
};

export default ArticleComponent;
