import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const animeApi = createApi({
    reducerPath:'animeApi',
    baseQuery:fetchBaseQuery({baseUrl:process.env.NEXT_PUBLIC_BASE_URL}),
    endpoints:(builder) => ({
        getAdventureAnime:builder.query({
            query: () => `adventure`
        }),
        getMusicAnime:builder.query({
            query: () => `music`
        }),
        getMysteryAnime:builder.query({
            query: () => `mystery`
        }),
        getSportAnime:builder.query({
            query: () => `sports`
        }),
    }),
})

export const { useGetAdventureAnimeQuery, useGetMusicAnimeQuery, useGetMysteryAnimeQuery, useGetSportAnimeQuery } = animeApi