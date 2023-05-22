import React from 'react';
import Messages from './Messages';
import Input from './Input';
import { useSelector } from 'react-redux';

const Chat = () => {
  const title = useSelector(state => state.chat.selectedChat);

  return (
    <div className="chat">
      <div className="chatInfo">
        <span>{title ? <b>{title}</b> : 'Выберите чат'}</span>
      </div>
      <Messages />
      <Input />
    </div>
  );
};

export default Chat;
