import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addMessage } from '../redux/slices/chatSlice';

const Input = () => {
  const [text, setText] = useState('');
  const tel = useSelector(state => state.chat.selectedChat);
  const dispatch = useDispatch;

  const handleSend = () => {
    dispatch(addMessage({ tel, msgs: text }));
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
        {tel && text && <button onClick={handleSend}>Send</button>}
      </div>
    </div>
  );
};

export default Input;
