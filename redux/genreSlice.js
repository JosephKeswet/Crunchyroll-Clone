import { createSlice, configureStore } from '@reduxjs/toolkit'


const genreSlice = createSlice({
    name: 'genre',
    initialState: {
      newGenre:''
    },
    reducers: {
      setGenre: (state,action) => {
        state.newGenre = action.payload
        console.log("Payload",action.payload);
      },
   
    
    }
  })

export const { setGenre } = genreSlice.actions
export default genreSlice.reducer


  