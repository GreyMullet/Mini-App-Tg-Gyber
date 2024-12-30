import { createSlice } from '@reduxjs/toolkit'

export const startChatSlice=createSlice({
  name: 'startNewChat',
  initialState: {
    value: ''
  },
  reducers: {
    startNewChat: (state, action)=>{
      state.value=action.payload
    }
  }
})

export const { startNewChat }=startChatSlice.actions

export default startChatSlice.reducer