import React, { useEffect } from 'react';
import Message from './Message';
import { useDispatch, useSelector } from 'react-redux';
import { receiveMsgsThunk } from '../redux/slices/chatSlice';

const Messages = () => {
  const selectedChat = useSelector(state => state.chat.selectedChat);
  const [messages] = useSelector(state => state.chat.chats).filter(
    el => el.tel === selectedChat
  );
  const dispatch = useDispatch();

  useEffect(() => {
    const receiver = setInterval(() => {
      dispatch(receiveMsgsThunk());
    }, 5000);
    return () => {
      clearInterval(receiver);
    };
  }, []);

  return (
    <div className="messages">
      {messages?.msgs?.map((m, i) => (
        <Message message={m} key={i + m.msg} />
      ))}
    </div>
  );
};

export default Messages;
