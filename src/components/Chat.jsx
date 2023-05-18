import React, { useContext } from 'react';
import Cam from '../img/cam.png';
import Add from '../img/add.png';
import More from '../img/more.png';
import Messages from './Messages';
import Input from './Input';
import { useSelector } from 'react-redux';

const Chat = () => {
  const title = useSelector(state => state.chat.selectedChat);

  return (
    <div className="chat">
      <div className="chatInfo">
        <span>{title}</span>
      </div>
      <Messages />
      <Input />
    </div>
  );
};

export default Chat;
