import React, { useEffect, useState } from 'react';
import Message from './Message';
import { useDispatch, useSelector } from 'react-redux';
import { receiveMsgsThunk } from '../redux/slices/chatSlice';

const Messages = () => {
  const selectedChat = useSelector(state => state.chat.selectedChat);
  const [messages] = useSelector(state => state.chat.chats).filter(
    el => el.tel === selectedChat
  );
  const dispatch = useDispatch();

  const [shouldRepeat, setShouldRepeat] = useState(true);

  const receiveMessages = async () => {
    await dispatch(receiveMsgsThunk());

    // Повторный вызов после получения данных
    if (shouldRepeat) {
      console.log('repeat receive');
      receiveMessages();
    }
  };

  useEffect(() => {
    receiveMessages();

    return () => {
      // Отмена повторного вызова при размонтировании компонента
      setShouldRepeat(false);
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
