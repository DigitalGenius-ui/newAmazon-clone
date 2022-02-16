import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const amazonApi = createApi({
  reducerPath: 'amazonApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://fakestoreapi.com' }),
  endpoints: (builder) => ({
    getAllProducts: builder.query({
      query: () => `products`,
    }),
  }),
})

export const { useGetAllProductsQuery } = amazonApi;