import { useSearchParams, useLocation } from 'react-router-dom';
import { UrlHelpers } from '@utils';

export const useHomePagination = () => {

    /* eslint-disable @typescript-eslint/no-unused-vars */
    const [searchParams, setSearchParams] = useSearchParams();

    const location = useLocation();

    const paginationPage = searchParams.get('page') ? Number(searchParams.get('page')) : 1;

    const handleChangePage = (value: number) => {

        const params = UrlHelpers.getAllParams(location.search);

        if (params) {
            setSearchParams({
                ...params,
                'page': value.toString(),
            });
        } else {
            setSearchParams({
                'page': value.toString(),
            });
        }

    };

    return {
        handleChangePage,
        paginationPage
    };

};