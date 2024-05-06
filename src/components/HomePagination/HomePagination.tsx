import { FC } from 'react';

import { Pagination, Flex } from '@uiKits';
import { HomePaginationProps } from './HomePagination.types';
import { useHomePagination } from './HomePagination.hooks';

export const HomePagination: FC<HomePaginationProps> = ({ total }) => {

    const { handleChangePage, paginationPage } = useHomePagination();

    return (
        <Flex
            align='center'
            justify='center'
            p='25px'
        >
            <Pagination
                total={total}
                onChange={handleChangePage}
                value={paginationPage}
            />
        </Flex>
    );
};
