/* eslint-disable quotes */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable prettier/prettier */
/* eslint-disable indent */
import React from 'react';
import Filters from '../../molecules/Filters';
import LogoAndTitle from '../../molecules/TitleAndLogo';

import {
    Header,
    HeaderWrapper
} from './styles';

const HeaderComponent: React.FC = () => {
    return (
        <Header>
            <HeaderWrapper>
                <Filters />
                <LogoAndTitle />
            </HeaderWrapper>
        </Header>
    );
};

export default HeaderComponent;
