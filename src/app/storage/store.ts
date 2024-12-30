import { configureStore } from '@reduxjs/toolkit'
import searchNickReducer from './searchNickSlice';
import startChatSliceReducer from './startChatSlice';

export default configureStore({
  reducer: {
    searchNick: searchNickReducer,
    startNewChat: startChatSliceReducer
  }
});
