import { api } from './api';
import {
    News,
} from '@typings';

export const newsApi = api.injectEndpoints({

    endpoints: (build) => ({
        newsList: build.query<News[], unknown>({
            query: () => ({
                url: '/api/product/vehicle/types',
            }),
            providesTags: ['News'],
        }),
    }),
});

export const {
    useNewsListQuery,
} = newsApi;