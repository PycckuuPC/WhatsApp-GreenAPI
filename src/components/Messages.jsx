import React, { useEffect, useState } from 'react';
import Message from './Message';
import { useDispatch, useSelector } from 'react-redux';

const Messages = () => {
  const selectedChat = useSelector(state => state.chat.selectedChat);
  const [messages] = useSelector(state => state.chat.chats).filter(
    el => el.tel === selectedChat
  );

  useEffect(() => {
    const reciever = setInterval(() => {
      console.log('interval');
    }, 3000);
    return () => {
      clearInterval(reciever);
    };
  }, []);

  console.log(messages?.msgs);

  return (
    <div className="messages">
      {messages?.msgs?.map(m => (
        <Message message={m} key={m?.id} />
      ))}
    </div>
  );
};

export default Messages;
