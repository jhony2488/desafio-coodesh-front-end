/* eslint-disable quotes */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable prettier/prettier */
/* eslint-disable indent */
import React, { useEffect, useState } from 'react';
import { useMediaQuery } from 'react-responsive';
import colors from '../../../../utils/colors';
import Logo from '../../atoms/Image';
import Title from '../../atoms/Titles';

import {
    TitleAndLogo,
    TitleAndLogoWrapper
} from './styles';

const TitleAndLogoComponent: React.FC = () => {
    const isMobile = useMediaQuery({ query: '(max-width: 500px)' });
    const isTablet = useMediaQuery({ query: '(max-width: 1080px)' });
    return (
        <TitleAndLogo>
            <TitleAndLogoWrapper>
                <div>
                    <Logo
                        src="https://raw.githubusercontent.com/jhony2488/images/master/rocket.png"
                        width='160px'
                        height='160px'
                        alt="logo"
                        title="logo"
                    />
                </div>
                <Title
                    content="Space Flight News"
                    color={colors.purple}
                    fontSize={isMobile ? '42' : isTablet ? '48' : '56'}
                    type="h1"
                    fontWeight="500"
                ></Title>
            </TitleAndLogoWrapper>
        </TitleAndLogo>
    );
};

export default TitleAndLogoComponent;
