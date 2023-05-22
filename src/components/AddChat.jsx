import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addChat, selectChat } from '../redux/slices/chatSlice';

const AddChat = () => {
  const [tel, setTel] = useState('+7');

  const dispatch = useDispatch();

  const handleAdd = async () => {
    dispatch(addChat({ tel, msgs: [] }));
    dispatch(selectChat(tel));
    setTel('+7');
  };

  const handleKey = e => {
    e.code === 'Enter' && handleAdd();
  };

  return (
    <div className="search">
      <div className="searchForm">
        <input
          type="text"
          placeholder="Добавить пользователя"
          onKeyDown={handleKey}
          onChange={e => setTel(e.target.value)}
          value={tel}
        />
        <button onClick={handleAdd}>Добавить</button>
      </div>
    </div>
  );
};

export default AddChat;
