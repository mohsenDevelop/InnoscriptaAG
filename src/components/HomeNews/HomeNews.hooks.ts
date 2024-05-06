import { useNewsListQuery } from '@api';

export const useHomeNews = () => {

    const { data, isLoading } = useNewsListQuery(
        { page: 1, pageSize: 21 },
    );

    return {
        data,
        isLoading
    };
};