import { FC } from 'react';
import { useSearchParams } from 'react-router-dom';

import { Pagination, Flex } from '@uiKits';
import { HomePaginationProps } from './HomePagination.types';

export const HomePagination: FC<HomePaginationProps> = ({ total }) => {

    let [searchParams, setSearchParams] = useSearchParams();

    return (
        <Flex
            align='center'
            justify='center'
            p='25px'
        >
            <Pagination
                total={total}
            />
        </Flex>
    );
};
