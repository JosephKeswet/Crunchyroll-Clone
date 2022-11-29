import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const animeApi = createApi({
    reducerPath:'animeApi',
    baseQuery:fetchBaseQuery({baseUrl:'https://kitsu.io/api/edge/anime?filter[categories]='}),
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