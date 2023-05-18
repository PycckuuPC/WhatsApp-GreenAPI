import { createContext, useEffect, useState } from 'react';

export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    // const unsub = onAuthStateChanged(auth, (user) => {
    //   setCurrentUser(user);
    //   console.log(user);
    // });
    // return () => {
    //   unsub();
    // };
  }, []);

  return (
    <AuthContext.Provider value={{ currentUser, setCurrentUser }}>
      {children}
    </AuthContext.Provider>
  );
};
