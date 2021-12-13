/* eslint-disable quotes */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable prettier/prettier */
/* eslint-disable indent */
import React, { useEffect,  useContext } from 'react';
import colors from '../../../../utils/colors';
import SelectSort from '../../atoms/Select';
import InputSearch from '../../atoms/Input';
import { ArticlesContext } from '../../../../context/Articles';
import { ServiceHighlights } from '../../../../services/articles';

import {
    Filters,
    FiltersWrapper
} from './styles';

const FiltersComponent: React.FC = () => {

    const { articles, setArticles } = useContext(ArticlesContext);

    const onChangeSort = (value: any) => {
        void ServiceHighlights(setArticles, ()=>{}, true, value);
        return;
    }

    return (
        <Filters>
            <FiltersWrapper>
                <div style={{ display: 'grid', justifyItems: 'center', alignItems: 'center', marginTop: 20 }}>
                    <InputSearch
                        name='search'
                        label=''
                        inputError=''
                        type='other'
                        typeInput='text'
                        backgroundColor='white'
                        height={36}
                        color='black'
                        size={16}
                        padding='12px'
                        fontWeight='bold'
                        colorLabel='black'
                        colorIcon={colors.white}
                        colorIconDiv={colors.purple}
                        borderRadius='5px'
                        labelFontSize={16}
                        marginRight={-3}
                        borderColor='black'
                        placeholder='Pesquisar artigos'
                        dataSearch={articles}
                        marginLeft={8}
                        fontSize='16px'
                        KEYS_TO_FILTERS={['title']}
                    />
                </div>
                <div style={{ marginRight: 5, backgroundColor:'red'}}>
                    <SelectSort
                        name="select" 
                        onChange={onChangeSort}
                        defaultValue=""
                        placeholder="Sort"
                        className="select"
                        disabled={false}
                        isTwo={true}
                    />
                </div>
            </FiltersWrapper>
        </Filters>
    );
};

export default FiltersComponent;
