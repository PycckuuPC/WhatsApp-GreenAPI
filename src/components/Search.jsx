import React, { useContext, useState } from 'react';
import { AuthContext } from '../context/AuthContext';
import { ChatContext } from '../context/ChatContext';
import { useDispatch } from 'react-redux';
import { addChat, selectChat } from '../redux/slices/chatSlice';

const Search = () => {
  const [tel, setTel] = useState('+7');
  const [user, setUser] = useState(null);
  const [err, setErr] = useState(false);

  const dispatch = useDispatch();

  const handleSearch = async () => {
    // const q = query(
    //   collection(db, 'users'),
    //   where('displayName', '==', username)
    // );
    // try {
    //   const querySnapshot = await getDocs(q);
    //   querySnapshot.forEach(doc => {
    //     setUser(doc.data());
    //   });
    // } catch (err) {
    //   setErr(true);
    // }
    dispatch(addChat({ tel, msgs: [] }));
    dispatch(selectChat(tel));
    setTel('+7');
  };

  const handleKey = e => {
    e.code === 'Enter' && handleSearch();
  };

  const handleSelect = async () => {
    // //check whether the group(chats in firestore) exists, if not create
    // const combinedId =
    //   currentUser.uid > user.uid
    //     ? currentUser.uid + user.uid
    //     : user.uid + currentUser.uid;
    // try {
    //   const res = await getDoc(doc(db, 'chats', combinedId));

    //   if (!res.exists()) {
    //     //create a chat in chats collection
    //     await setDoc(doc(db, 'chats', combinedId), { messages: [] });

    //     //create user chats
    //     await updateDoc(doc(db, 'userChats', currentUser.uid), {
    //       [combinedId + '.userInfo']: {
    //         uid: user.uid,
    //         displayName: user.displayName,
    //         photoURL: user.photoURL,
    //       },
    //       [combinedId + '.date']: serverTimestamp(),
    //     });

    //     await updateDoc(doc(db, 'userChats', user.uid), {
    //       [combinedId + '.userInfo']: {
    //         uid: currentUser.uid,
    //         displayName: currentUser.displayName,
    //         photoURL: currentUser.photoURL,
    //       },
    //       [combinedId + '.date']: serverTimestamp(),
    //     });
    //   }
    // } catch (err) {}

    setUser(null);
    setTel('');
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
        <button onClick={handleSearch}>Добавить</button>
      </div>
      {err && <span>User not found!</span>}
      {user && (
        <div className="userChat" onClick={handleSelect}>
          <img src={user.photoURL} alt="" />
          <div className="userChatInfo">
            <span>{user.displayName}</span>
          </div>
        </div>
      )}
    </div>
  );
};

export default Search;
