import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addChat, selectChat } from '../redux/slices/chatSlice';

const Chats = () => {
  const { chats } = useSelector(state => state.chat);
  const dispatch = useDispatch();

  // useEffect(() => {
  //   const getChats = () => {
  //     const unsub = onSnapshot(doc(db, "userChats", currentUser.uid), (doc) => {
  //       setChats(doc.data());
  //     });

  //     return () => {
  //       unsub();
  //     };
  //   };

  //   currentUser.uid && getChats();
  // }, [currentUser.uid]);

  const handleSelect = u => {
    dispatch(addChat(u));
  };

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
