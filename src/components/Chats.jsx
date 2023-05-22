import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectChat } from '../redux/slices/chatSlice';

const Chats = () => {
  const { chats } = useSelector(state => state.chat);
  const dispatch = useDispatch();

  return (
    <div className="chats">
      {chats?.map(chat => (
        <div
          className="userChat"
          key={chat.tel}
          onClick={e => dispatch(selectChat(e.target.innerText))}
        >
          <div className="userChatInfo">
            <span>{chat.tel}</span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Chats;
