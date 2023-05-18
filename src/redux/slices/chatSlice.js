import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  chats: [],
  selectedChat: null,
};

export const chatSlice = createSlice({
  name: 'chat',
  initialState,
  reducers: {
    addChat: (state, action) => ({
      ...state,
      chats: [...state.chats, action.payload],
    }),
    selectChat: (state, action) => ({ ...state, selectedChat: action.payload }),
    addMessage: (state, action) => ({
      ...state,
      chats: state.chats.map(chat =>
        chat.tel === action.payload.tel
          ? { ...chat, msgs: [...chat.msgs, action.payload] }
          : chat
      ),
    }),
  },
});

export const { addChat, selectChat, addMessage } = chatSlice.actions;

export default chatSlice.reducer;
