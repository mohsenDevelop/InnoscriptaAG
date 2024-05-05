import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import { BASE_URL } from '@configs';

export const api = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({
    baseUrl: `${BASE_URL}?apiKey=${process.env.VITE_API_KEY}`,
    prepareHeaders: (headers: any) => {
      return headers;
    },
  }),
  tagTypes: ['News'],
  endpoints: () => ({}),
});
