import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const animeApi = createApi({
    reducerPath:'animeApi',
    baseQuery:fetchBaseQuery({baseUrl:process.env.NEXT_PUBLIC_BASE_URL}),
    endpoints:(builder) => ({
        getAdventureAnime:builder.query({
            query: () => `anime?filter[categories]=adventure`
        }),
        getMusicAnime:builder.query({
            query: () => `anime?filter[categories]=music`
        }),
    }),
})

export const { useGetAdventureAnimeQuery, useGetMusicAnimeQuery } = animeApi