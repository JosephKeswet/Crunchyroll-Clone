import { configureStore } from '@reduxjs/toolkit'
// Or from '@reduxjs/toolkit/query/react'
import { setupListeners } from '@reduxjs/toolkit/query'
import genreReducer from './redux/genreSlice'
import { animeApi } from './redux/services/animeApi'

export const store = configureStore({
  reducer: {
    // Add the generated reducer as a specific top-level slice
    [animeApi.reducerPath]: animeApi.reducer,
    genre:genreReducer,
  },
  // Adding the api middleware enables caching, invalidation, polling,
  // and other useful features of `rtk-query`.
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(animeApi.middleware),
})

// optional, but required for refetchOnFocus/refetchOnReconnect behaviors
// see `setupListeners` docs - takes an optional callback as the 2nd arg for customization
setupListeners(store.dispatch)