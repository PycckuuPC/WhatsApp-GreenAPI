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
      chats: [
        ...state.chats,
        ...[action.payload].filter(el =>
          state.chats.every(chat => chat.tel !== el.tel)
        ),
      ],
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

export const receiveMsgsThunk = () => async (dispatch, getState) => {
  const msgs = receiveMsg();
  const chats = getState().chat.chats.map(el => el.tel);

  try {
    const data = await msgs;
    if (data) {
      const chat = `+${data.senderData.sender.slice(0, 11)}`;
      const msg = data.messageData.textMessageData.textMessage;
      if (!chats.includes(chat)) dispatch(addChat({ tel: chat, msgs: [] }));
      dispatch(addMessage({ chat, tel: chat, msg }));
    }
  } catch (error) {
    console.error(error);
  }
};

export default chatSlice.reducer;
