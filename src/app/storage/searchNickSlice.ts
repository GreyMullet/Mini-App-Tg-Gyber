import { createSlice } from '@reduxjs/toolkit'

export const searchNickSlice=createSlice({
  name: 'searchNick',
  initialState: {
    value: ''
  },
  reducers: {
    searchNick: (state, action)=>{
      state.value=action.payload
    }
  }
})

export const { searchNick }=searchNickSlice.actions

export default searchNickSlice.reducer