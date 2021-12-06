/* eslint-disable quotes */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable prettier/prettier */
/* eslint-disable indent */
import React from 'react';

import ArticleComponent from './index';

export default {
    title: 'Design System/Articles/Article',
    component: ArticleComponent,
};

const Template = (args: any) => (
    <div
        style={{
            width: 700,
            padding: 10,
            marginLeft: 12,
            marginRight: 12,
            height: '400px'
        }}>
        <ArticleComponent  {...args} />
    </div>
);

export const ArticlePar: any = Template.bind({});
ArticlePar.args = {
    src: "https://raw.githubusercontent.com/jhony2488/images/master/behance.png",
    widthImage: '100%',
    heightImage: '70%',
    title: "Titulo Artigo",
    content: "Problems increasing production of the Raptor engines that power SpaceX’s Starship vehicle have led to personnel shakeups at the company and a warning from founder Elon Musk that the company risked “bankruptcy” if the company could not resolve them.",
    newSite: "new site",
    date: "2021-12-01T16:27:33.585Z",
    handleButton: () => { }
};

export const ArticleImpar: any = Template.bind({});
ArticleImpar.args = {
    src: "https://raw.githubusercontent.com/jhony2488/images/master/behance.png",
    widthImage: '100%',
    heightImage: '70%',
    title: "Titulo Artigo",
    content: "Problems increasing production of the Raptor engines that power SpaceX’s Starship vehicle have led to personnel shakeups at the company and a warning from founder Elon Musk that the company risked “bankruptcy” if the company could not resolve them.",
    newSite: "new site",
    date: "2021-12-01T16:27:33.585Z",
    handleButton: () => { },
    isPar: false
};
