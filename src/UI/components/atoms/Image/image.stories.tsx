/* eslint-disable quotes */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable prettier/prettier */
/* eslint-disable indent */
import React from 'react';

import Image from './index';
import colors from '../../../../utils/colors';

export default {
    title: 'Image',
    component: Image,
};

const Template = (args: any) => (
    <div
        style={{
            display: 'grid',
            justifyItems: 'center',
            justifyContent: 'start',
            width: 400,
            backgroundColor: colors.purple,
            padding: 10,
            marginLeft: 12,
            marginRight: 12,
            height: 400,
        }}>
        <Image {...args} />
    </div>
);

export const ImageLogo: any = Template.bind({});
ImageLogo.args = {
    src:"https://raw.githubusercontent.com/jhony2488/images/master/rocket.png",
    width: '100%',
    height: '100%',
    alt: "logo",
    title: "logo"
};
