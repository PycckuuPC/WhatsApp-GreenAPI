import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addMessage, sendMessageThunk } from '../redux/slices/chatSlice';

const Input = () => {
  const [text, setText] = useState('');
  const chat = useSelector(state => state.chat.selectedChat);
  const dispatch = useDispatch();

  const handleSend = () => {
    dispatch(addMessage({ chat, tel: 'my', msg: text }));
    dispatch(sendMessageThunk(chat.slice(1), text));
    setText('');
  };
  return (
    <div className="input">
      <input
        type="text"
        placeholder="Введите сообщение..."
        onChange={e => setText(e.target.value)}
        value={text}
      />
      <div className="send">
        {chat && text && <button onClick={handleSend}>Отправить</button>}
      </div>
    </div>
  );
};

export default Input;
