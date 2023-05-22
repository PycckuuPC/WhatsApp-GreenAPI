import { createSlice } from '@reduxjs/toolkit';
import { sendMsg, receiveMsg } from '../../utils/greenAPI';

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
        chat.tel === action.payload.chat
          ? { ...chat, msgs: [...chat.msgs, action.payload] }
          : chat
      ),
    }),
  },
});

export const { addChat, selectChat, addMessage } = chatSlice.actions;

export const sendMessageThunk = (tel, message) => dispatch => {
  sendMsg(tel, message);
};

export const receiveMsgsThunk = () => dispatch => {
  const msgs = receiveMsg();
  dispatch(addMessage(msgs));
};

export default chatSlice.reducer;
