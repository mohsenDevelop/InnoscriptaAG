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
                transformResponse: (response: Magazine) => ({ ...response, articles: response?.articles?.filter((article) => !!article.author) })
            }
        ),
    }),
});

export const {
    useNewsListQuery,
} = newsApi;