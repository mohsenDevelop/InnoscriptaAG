import { api } from './api';
import {
    Magazine,
    MagazineParams
} from '@typings';

export const newsApi = api.injectEndpoints({

    endpoints: (build) => ({
        newsList: build.query<Magazine, MagazineParams>(
            {
                query: ({ page, pageSize }) => ({
                    url: `/v2/top-headlines?country=us&apiKey=${import.meta.env.VITE_API_KEY}&page=${page}&pageSize=${pageSize}`,
                }),
                providesTags: ['News'],
            }
        ),
    }),
});

export const {
    useNewsListQuery,
} = newsApi;