import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const apiSlice = createApi({
  reducerPath: 'characters',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://rickandmortyapi.com/api/' }),
  endpoints: (build) => ({
    getSingleCharacter: build.query({
      query: (id) => `character/${id}`,
    }),
    getCharacter: build.query({
      query: (name) => `character/?name=${name}`,
    }),
  }),
});

export const { useGetSingleCharacterQuery, useGetCharacterQuery } = apiSlice;
